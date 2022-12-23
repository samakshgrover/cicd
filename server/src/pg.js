const { config } = require('./config/config');
const { Pool } = require('pg');

const pool = new Pool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
});

module.exports = pool;
