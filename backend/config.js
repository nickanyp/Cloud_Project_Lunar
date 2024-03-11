//Database Configuration

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'lunar-db.cjygw2mieoqy.ap-southeast-1.rds.amazonaws.com',
  // host: '13.213.11.112',
  user: 'admin',
  password: 'password',
  database: 'lunar',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
