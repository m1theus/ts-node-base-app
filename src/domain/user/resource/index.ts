import { Request, Response } from 'express';
import { container, autoInjectable } from 'tsyringe';

import ResponseEntity from '@utils/resource/ResponseEntity';
import { isValidParams } from '@utils/validations';
import UserService from '../service';

const requiredParams = ['email', 'username', 'password'];

@autoInjectable()
export default class UserResource {
  public async save(request: Request, response: Response) {
    if (!isValidParams(requiredParams, request)) {
      return ResponseEntity.badRequest(response);
    }
    return ResponseEntity.ok(await container.resolve(UserService).save(request.body), response);
  }
}
