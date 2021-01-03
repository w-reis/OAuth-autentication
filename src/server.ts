import 'reflect-metadata';

import express from 'express';
import nunjucks from 'nunjucks';
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

app.use(routes);

app.listen(config.app.port, () => {
  console.log('Server is started on http://localhost:3333');
});
