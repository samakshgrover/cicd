const express = require('express');
const { test } = require('./conteroller');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('blogs page');
});

router.get('/test', test);

module.exports = router;
