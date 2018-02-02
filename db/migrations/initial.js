exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('loginInfo', (table) => {
      table.increments('id').unsigned().primary();
      table.string('username', 100).nullable();
      table.string('password', 100).nullable();      
      table.string('email', 100).nullable().unique();
    }),
    knex.schema.createTableIfNotExists('profileInfo', (table) => {
      table.increments('id').unsigned().primary();
      table.string('firstName', 100).nullable();
      table.string('lastName', 100).nullable();
      table.string('phone', 100).nullable();
      table.string('address', 100).nullable();
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('loginInfo'),
    knex.schema.dropTable('profileInfo')
  ]);
};
