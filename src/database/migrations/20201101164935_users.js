exports.up = knex => knex.schema.createTable('users',  table => {
  table.increments('id')
  table.string('companyName').notNullable()
  table.string('name').notNullable()
  table.string('cnpj').unique().notNullable()
  table.string('cpf').unique().notNullable()
  table.string('email').unique().notNullable()
  table.string('confirmEmail').unique().notNullable()
  table.string('password').notNullable()
  table.string('confirmPassword').notNullable()
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('users')