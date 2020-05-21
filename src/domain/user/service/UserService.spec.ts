import 'reflect-metadata';
import HttpError from '@utils/errors/HttpError';
import UserService from './index';

import MockUserRepository from '../__mocks__/MockUserRepository';

describe('User Service', () => {
  it('should be able to create a new user', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    const user = await userService.save({
      username: 'uNCR',
      email: 'uNCR@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    await mockUserRepository.save({
      username: 'uNCR',
      email: 'uNCR@example.com',
      password: '123456',
    });

    expect(
      userService.save({
        username: 'uNCR',
        email: 'uNCR@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(HttpError);
  });
});
