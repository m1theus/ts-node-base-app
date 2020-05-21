import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';

import User from '@domain/user/entity';
import IUserRepository from '@domain/user/repository/IUserRepository';
import HttpError from '@utils/errors/HttpError';
import HTTP_STATUS from '@utils/resource/HttpStatus.enum';
import { createToken } from '@utils/jwt';

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export default class AuthService {
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}

  public async login(username: string, password: string): Promise<IResponse> {
    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, 'Incorrect username/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, 'Incorrect username/password combination.');
    }

    const token = createToken(user);
    delete user.password;

    return {
      user,
      token,
    };
  }
}
