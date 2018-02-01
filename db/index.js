const knex = require('knex')({
  client: 'postgresql',   
  connection: {
    host     : 'localhost',
    user     : '',
    password : '',
    database : 'gideonbaik',
  },
  "pool": {
    "min": 1,
    "max": 2
  }
});

const db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;
