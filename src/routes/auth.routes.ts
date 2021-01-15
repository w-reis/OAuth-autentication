import { Router } from 'express';
import passport from 'passport';

const authRouter = Router();

authRouter.use(passport.initialize());

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get(
  '/google/redirect',
  passport.authenticate('google'),
  (request, response) => {
    if (request.session) {
      request.session.user = request.user;
    }
    response.redirect('/user/profile/');
  }
);

export default authRouter;
