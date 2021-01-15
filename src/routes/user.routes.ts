import { Router } from 'express';

const userRouter = Router();

userRouter.get('/profile', (request, response) => {
  if (request.session) {
    const { user } = request.session;
    response.render('profile', { user });
  }
});

export default userRouter;
