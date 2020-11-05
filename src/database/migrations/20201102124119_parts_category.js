exports.up = knex => knex.schema.createTable('parts_category', table => {
  table.increments('id')
  table.string('title').notNullable()
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
}) 

exports.down = knex => knex.schema.dropTable('parts_category')