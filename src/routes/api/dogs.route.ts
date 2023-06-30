import { Router } from 'express';
import dogsController from '../../controllers/dogs.controller';
import { dogsApiLink } from '../../enum/route.enum';
import { dogDataValidate } from '../../validation/dog.validation';
import { tryCatch } from '../../middlewares/tryCatch.middleware';
import { validationMiddleware } from '../../middlewares/validation.middleware';
import { isExistByName } from '../../middlewares/isExistByName.middleware';
import { Dog } from '../../models/Dog.model';
import { isExistById } from '../../middlewares/IsExistById.middleware';

const dogsRouter: Router = Router();

dogsRouter.get(
  dogsApiLink.GET_ALL,
  tryCatch(dogsController.getAll.bind(dogsController)));

dogsRouter.get(
  dogsApiLink.GET_ONE,
  tryCatch(isExistById(Dog)),
  tryCatch(dogsController.getById.bind(dogsController)));

dogsRouter.post(
  dogsApiLink.CREATE,
  tryCatch(isExistByName(Dog)),
  tryCatch(validationMiddleware(dogDataValidate)),
  tryCatch(dogsController.create.bind(dogsController)));

dogsRouter.delete(
  dogsApiLink.DELETE,
  tryCatch(isExistById(Dog)),
  tryCatch(dogsController.deleteById.bind(dogsController)));

dogsRouter.put(
  dogsApiLink.UPDATE,
  tryCatch(isExistById(Dog)),
  tryCatch(validationMiddleware(dogDataValidate)),
  tryCatch(dogsController.updateById.bind(dogsController)));

export default dogsRouter;
