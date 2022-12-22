const express = require('express');
const {
  test,
  getAllBlogs,
  getBlog,
  createBlog,
  deleteBlog,
} = require('./conteroller');
const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);

router.get('/test/1', test);

module.exports = router;
