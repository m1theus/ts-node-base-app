import { Response, NextFunction, Request } from 'express';
import { container, autoInjectable } from 'tsyringe';

import ResponseEntity from '@utils/resource/ResponseEntity';
import AuthService from '../service';

@autoInjectable()
export default class AuthResource {
  public async login(request: Request, response: Response, _: NextFunction) {
    const { username, password } = request.body;

    if (!username || !password) {
      return ResponseEntity.badRequest(response);
    }

    return ResponseEntity.ok(
      await container.resolve(AuthService).login(username, password),
      response,
    );
  }
}
