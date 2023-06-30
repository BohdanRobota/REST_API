import { Request, Response, NextFunction } from 'express';
import { ModelCtor } from 'sequelize-typescript';
import ApiError from '../error/ApiError';


export const isExistByName =
  (model: ModelCtor) =>
    async (req: Request, _: Response, next: NextFunction) => {
      const { name } = req.body;
      const response = await model.findOne({ where: { name } });
      if (response) {
        throw ApiError.badRequest('Pet with this name already exists, modify the name please');
      }
      next();
    };
