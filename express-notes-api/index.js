const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const key in data.notes) {
    array.push(data.notes[key]);
  }
  res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.json(data.notes[id]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = data.nextId++;
    data.notes[req.body.id] = req.body;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: 'cannot find note with id {id}' });
  } else {
    data.notes[id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.json(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000');
});
