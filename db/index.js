const knex = require('knex')({client: 'postgresql', connection: process.env.MYSQL_DATABASE_CONNECTION });
const db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;
