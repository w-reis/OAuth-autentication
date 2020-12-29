import 'reflect-metadata';

import express from 'express';
import config from './config';
import routes from './routes';
import './services/auth';
import './database';

const app = express();

app.use(routes);

app.listen(config.app.port, () => {
  console.log('Server is started on http://localhost:3333');
});
