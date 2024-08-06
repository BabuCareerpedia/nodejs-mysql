const mysql = require('mysql2/promise');
require('dotenv').config();
const {MYSQL_DATABASE} = require('../config/config')

const pool = mysql.createPool({
  host: process.env.SQL_DATABASE_HOST,
  user: process.env.SQL_DATABASE_USERNAME,
  password: process.env.SQL_DATABASE_PASSWORD,
  database: process.env.SQL_DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(conn => {
    console.log('Database connected successfully');
    conn.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

module.exports = pool;
