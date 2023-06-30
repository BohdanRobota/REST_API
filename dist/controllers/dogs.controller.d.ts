import { Response, Request } from 'express';
export declare class DogsController {
    constructor();
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    deleteById(req: Request, res: Response): Promise<void>;
    updateById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
}
declare const dogsController: DogsController;
export default dogsController;
