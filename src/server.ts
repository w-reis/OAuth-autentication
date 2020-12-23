import 'reflect-metadata';

import express from 'express';
import config from './config';
import './database';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'Hello FinApp' });
});

app.listen(config.app.port, () => {
  console.log('Server is started at http://localhost:3333');
});
