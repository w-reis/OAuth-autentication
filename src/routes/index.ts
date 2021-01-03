import { Router } from 'express';

import authRouter from './auth.routes';

const routes = Router();

routes.use('/auth', authRouter);

routes.get('/', (request, response) => {
  response.render('index');
});

export default routes;
