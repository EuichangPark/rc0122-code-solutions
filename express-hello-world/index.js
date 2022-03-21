const express = require('express');
const app = express();
app.use((req, res) => {
  res.send('sending');
});

app.listen(3000, () => {
});
