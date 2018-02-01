exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('loginInfo', (table) => {
      table.increments('id').unsigned().primary();
      table.string('firstName', 100).nullable();
      table.string('lastName', 100).nullable();
      table.string('phone', 100).nullable();
      table.string('address', 100).nullable();
    }),
    knex.schema.createTableIfNotExists('profileInfo', (table) => {
      table.increments('id').unsigned().primary();
      table.string('username', 100).nullable();
      table.string('password', 100).nullable();      
      table.string('email', 100).nullable().unique();
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE if exists loginInfo CASCADE'),
    knex.raw('DROP TABLE if exists profileInfo CASCADE'),
  ]);
};
