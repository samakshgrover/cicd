const BlogsModel = require('./model');

const model = new BlogsModel();

async function test(req, res) {
  const result = await model.testDb();
  res.send({ result });
}

module.exports = { test };
