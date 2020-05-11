import { Request } from 'express';

import IBaseResource from './IBaseResource';

export default class BaseResource implements IBaseResource {
  isValidParams = (_params: string[], _request: Request) => (params: string[], { body }: Request) =>
    params.map(param => !body[param])?.filter(value => value)?.length === 0;
}
