const app = require('express')();
require('dotenv').config();

const PORT = process.env.PORT | 8080;

app.get('/', (req, res) => {
  res.send(`working`);
});

app.get('/data', (req, res) => {
  res.send(`${process.env.PGHOST}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
