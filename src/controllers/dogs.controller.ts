import { Response, Request } from 'express';
import DogsService from '../services/dogs.service';


export class DogsController {
  constructor(private dogsService: typeof DogsService) { }

  async getAll(req: Request, res: Response) {
    const dogs = await this.dogsService.getAll();
    res.send(dogs);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const dog = await this.dogsService.getById(Number(id));
    res.json(dog);
  }

  async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    const dog = await this.dogsService.deleteById(Number(id));
    res.json(dog);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const updatedDog = await this.dogsService.updateById(Number(id), req.body);
    res.json(updatedDog);
  }

  async create(req: Request, res: Response) {
    const newDog = await this.dogsService.create(req.body);
    res.json(newDog);
  }
}

const dogsController = new DogsController(DogsService);
export default dogsController;
