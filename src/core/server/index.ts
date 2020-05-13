import express from 'express';
import CreateDatabaseConnection from '@core/database';
import CreateMiddlewares from '@core/middlewares';

class AppServer {
  private PORT = process.env.PORT ?? 1337;

  private app = express();

  async start() {
    console.info('> [server] starting...');
    const middlewares = new CreateMiddlewares(this.app);
    await CreateDatabaseConnection.start();
    middlewares.start();
    this.app.listen(this.PORT, () => console.info(`> [server] started on port: ${this.PORT}`));
  }
}

export default new AppServer();
