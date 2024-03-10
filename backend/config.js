//Database Configuration

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db-lunar-rds.cjygw2mieoqy.ap-southeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'lunar',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
