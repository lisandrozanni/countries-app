const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'sqlite',
    storage: './db.development.sqlite'
  },
  test: {
    username: 'root',
    password: null,
    database: 'db.test.sqlite',
    host: '127.0.0.1',
    dialect: 'sqlite'
  }
};
