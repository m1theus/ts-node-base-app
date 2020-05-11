/* eslint-disable no-console */
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as Sentry from '@sentry/node';
import { createConnection } from 'typeorm';

import errorMiddleware from '@utils/middleware';
import routes from './routes';
import '@utils/container';

dotenv.config();
const app = express();
Sentry.init({ dsn: process.env.SENTRY_KEY });

app.use(
  Sentry.Handlers.requestHandler({
    ip: true,
    request: true,
    serverName: true,
    transaction: true,
    user: true,
    version: true,
  }) as express.RequestHandler,
);
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);
app.use(errorMiddleware);

const PORT = process.env.PORT || 1337;

const main = async (): Promise<void> => {
  await createConnection();
  app.listen(PORT, () => console.log(`\n🚀️ Server started on port: ${PORT}!\n`));
};

main().catch(err => console.error('💣MAIN_ERROR=', err));
