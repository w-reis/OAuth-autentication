import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'Hello FinApp' });
});

app.listen(3333, () => {
  console.log('Server is started at http://localhost:3333');
});
