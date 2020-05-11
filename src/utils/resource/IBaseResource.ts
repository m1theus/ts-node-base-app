import { Request } from 'express';

export default interface IBaseResource {
  isValidParams(
    params: string[],
    { body }: Request,
  ): (params: string[], { body }: Request) => boolean;
}
