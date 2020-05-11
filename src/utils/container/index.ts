import 'reflect-metadata';
import { container } from 'tsyringe';

import UserRepository from '@domain/user/repository/UserRepository';

container.register('UserRepository', {
  useClass: UserRepository,
});
