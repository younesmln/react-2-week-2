const express = require('express');
const app = express();
var cors = require('cors')({
  origin: 'http://localhost:3000',
});
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const todos = [
  {
    text: 'wake up',
    done: false,
  },
];

app.get('/todos', cors, (req, res) => {
  res.send(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
