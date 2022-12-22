const BlogsModel = require('./model');

const model = new BlogsModel();

async function test(req, res) {
  const result = await model.testDb();
  res.json({ result });
}

async function getAllBlogs(req, res) {
  const result = await model.getAllBlogs();
  res.send({ result });
}

async function getBlog(req, res) {
  const id = req.params.id;
  const result = await model.getBlog(id);
  res.json({ result });
}

async function createBlog(req, res) {
  const { title, description, content } = req.body;
  console.log({ title, description, content });
  const result = await model.createBlog(title, description, content);
  res.json({ result });
}

async function deleteBlog(req, res) {
  const id = req.params.id;
  const result = await model.deleteBlog(id);
  res.json({ result });
}

module.exports = { test, getAllBlogs, getBlog, createBlog, deleteBlog };
