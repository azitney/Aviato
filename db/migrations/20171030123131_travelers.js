
exports.up = function(knex, Promise) {
  return knex.schema.createTable('travelers', (table)=>{
    table.increments();
    table.string('name');
    table.string('username');
    table.string('email');
    table.string('password');
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('travelers');
};
