import { Request, Response } from 'express';
import { container, autoInjectable } from 'tsyringe';

import ResponseEntity from '@utils/resource/ResponseEntity';
import BaseResource from '@utils/resource/BaseResource';
import UserService from '../service';

const requiredParams = ['email', 'password', 'firstName', 'lastName', 'age'];
const isValidParams = (_params: string[], _request: Request) => (
  params: string[],
  { body }: Request,
) => params.map(param => !body[param])?.filter(value => value)?.length === 0;

@autoInjectable()
export default class UserResource extends BaseResource {
  public async one(request: Request, response: Response) {
    const { id } = request.params;
    return ResponseEntity.ok(await container.resolve(UserService).findById(id), response);
  }

  public async save(request: Request, response: Response) {
    if (!isValidParams(requiredParams, request)) {
      return ResponseEntity.badRequest(response);
    }
    return ResponseEntity.ok(await container.resolve(UserService).save(request.body), response);
  }

  public async remove(request: Request, response: Response) {
    const { id } = request.params;
    return ResponseEntity.ok(await container.resolve(UserService).remove(id), response);
  }
}
