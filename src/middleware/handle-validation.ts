import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const HandleValidation = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
};
