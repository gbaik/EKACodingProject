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
    knex.raw('DROP TABLE if exists auths CASCADE'),
    knex.raw('DROP TABLE if exists profiles CASCADE'),
    knex.raw('DROP TABLE if exists groups CASCADE'),
    knex.raw('DROP TABLE if exists profiles_groups CASCADE'),
    knex.raw('DROP TABLE if exists channels CASCADE'),
    knex.raw('DROP TABLE if exists messages CASCADE'),
    knex.raw('DROP TABLE if exists profiles_friends CASCADE'),
    knex.raw('DROP TABLE if exists pending_friend_requests CASCADE'),
    knex.raw('DROP TABLE if exists events CASCADE'),
    knex.raw('DROP TABLE if exists attendees CASCADE')
  ]);
};
