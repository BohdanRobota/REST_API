import { Router } from 'express';
import dogsController from '../../controllers/dogs.controller';
import { dogsApiLink } from '../../enum/route.enum';


const dogsRouter: Router = Router();

dogsRouter.get(dogsApiLink.GET_ALL, dogsController.getAll.bind(dogsController));
dogsRouter.get(dogsApiLink.GET_ONE, dogsController.getById.bind(dogsController));
dogsRouter.post(dogsApiLink.CREATE, dogsController.create.bind(dogsController));
dogsRouter.delete(dogsApiLink.DELETE, dogsController.deleteById.bind(dogsController));
dogsRouter.put(dogsApiLink.UPDATE, dogsController.updateById.bind(dogsController));

export default dogsRouter;
