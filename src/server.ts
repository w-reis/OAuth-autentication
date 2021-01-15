import 'reflect-metadata';

import express from 'express';
import nunjucks from 'nunjucks';
import cookieSession from 'cookie-session';
import passport from 'passport';
import config from './config';
import routes from './routes';
import './services/auth';
import './database';

const app = express();

app.set('view engine', 'njk');

nunjucks.configure('src/views', {
  express: app,
  autoescape: false,
  noCache: true,
});

app.use(express.static('src/public'));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.session.cookieKey],
  })
);

app.use(routes);

app.use(passport.session());

app.listen(config.app.port, () => {
  console.log('Server is started on http://localhost:3333');
});
