import { Request, Response, NextFunction } from 'express';
import { ModelCtor } from 'sequelize-typescript';
import ApiError from '../error/ApiError';


export const isExistById =
  (model: ModelCtor) =>
    async (req: Request, _: Response, next: NextFunction) => {
      const { id } = req.params;
      const response = await model.findByPk(id);
      if (!response) {
        throw ApiError.badRequest('There are no entities with such id');
      }
      next();
    };
