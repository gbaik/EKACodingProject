const config = {
  'knex': {
    'client': 'postgresql',
    'connection': {
      'database': 'eva',
      'user': '',
      'password': '',
      'host': 'localhost', 
      'port': 5432
    },
    'pool': {
      'min': 1,
      'max': 2
    },
    'migrations': {
      'tableName': 'knex_migrations',
      'directory': 'db/migrations'
    }
  }
}

module.exports = config['knex'];