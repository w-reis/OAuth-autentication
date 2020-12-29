import { Router } from 'express';
import passport from 'passport';

const authRouter = Router();

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get('/google/redirect', (request, response) => {
  response.send('You reached the callback URI');
});

export default authRouter;
