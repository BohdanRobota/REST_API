import { Application } from 'express';
import dogsRouter from './api/dogs.route';
import { apiRoot, pingApi } from '../enum/route.enum';


class AppRouter {
  constructor(private app: Application) { }

  init() {
    this.app.get(pingApi.PING, (_req, res) => {
      res.send('Dogshouseservice.Version1.0.1');
    });
    this.app.use(apiRoot.ROOT, dogsRouter);
  }
}

export default AppRouter;
