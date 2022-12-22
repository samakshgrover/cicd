const app = require('express')();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const blogRouter = require('./src/blogs/router');
const PORT = process.env.PORT | 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
