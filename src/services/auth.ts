import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import config from '../config';

const { clientID, clientSecret } = config.auth.google;
const callbackURL = '/auth/google/redirect';

passport.use(
  new GoogleStrategy(
    { clientID, clientSecret, callbackURL },
    (accessToken, refleshToken, profile, done) => {
      console.log(profile);
    }
  )
);
