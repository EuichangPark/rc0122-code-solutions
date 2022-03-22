const express = require('express');
const app = express();

let nextId = 1;
const grades = {
  1: {
    id: 1,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  3: {
    id: 3,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  }
};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

const parsing = express.json();
app.use('/api/grades', parsing);

app.post('/api/grades', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  req.body.id = nextId++;
  grades[req.body.id] = req.body;
  res.status(201).send(req.body);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000');
});
