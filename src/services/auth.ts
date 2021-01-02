import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import CreateUserService from './CreateUserService';
import FindUserService from './FindUserService';

import config from '../config';

const { clientID, clientSecret } = config.auth.google;
const callbackURL = '/auth/google/redirect';

const createUser = new CreateUserService();
const findUser = new FindUserService();

passport.serializeUser((user: { id: string }, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
  findUser.execute(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    { clientID, clientSecret, callbackURL },
    (accessToken, refleshToken, profile, done) => {
      const {
        sub: auth_provider_id,
        picture: avatar,
        given_name: name,
        email,
        // eslint-disable-next-line no-underscore-dangle
      } = profile._json;

      createUser
        .execute({
          auth_provider_id,
          avatar,
          name,
          email,
        })
        .then(user => {
          done(undefined, user);
        });
    }
  )
);
