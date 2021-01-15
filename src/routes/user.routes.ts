import { Router } from 'express';

const userRouter = Router();

userRouter.get('/profile', (request, response) => {
  response.render('profile');
});

export default userRouter;
