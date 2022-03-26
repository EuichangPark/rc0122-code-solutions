const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const middleware = express.json();
app.use('/api/grades', middleware);

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  // eslint-disable-next-line no-console
  console.log(req.body);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'name, course, body are required fields.'
    });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'score must be an positive integer between 0 and 100'
    });
  } else {
    const sql = `
    insert into "grades" ("name","course", "score")
    values (Kent, HTML, 80)
    returning *
    `;

    const params = [req.body.name, req.body.course, score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.err(err);
        res.status(500).json({
          error: 'an unexpected error occurred'
        });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000');
});
