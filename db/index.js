const knex = require('knex')({
  client: 'postgresql',   
  connection: {
    host: 'localhost',
    user: '',
    password : '',
    database : 'eva',
  }
});

const db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;
