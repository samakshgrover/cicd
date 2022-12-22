const app = require('express')();
require('dotenv').config();

const blogRouter = require('./src/blogs/router');

const PORT = process.env.PORT | 8080;

app.get('/', (req, res) => {
  res.send(`circle ci working`);
});

app.get('/data', (req, res) => {
  res.send(`${process.env.PGHOST}`);
});

app.use('/blogs', blogRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
