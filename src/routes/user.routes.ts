import { Router } from 'express';
import passport from 'passport';

const userRouter = Router();

userRouter.use(passport.initialize());

userRouter.get('/profile', (request, response) => {
  response.send('User Profile');
});

export default userRouter;
