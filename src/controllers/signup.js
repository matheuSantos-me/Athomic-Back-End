// exports.up = function(knex) {
//   return knex.schema.createTable('order_of_service', function (table) {
//     table.string('id').primary();
//     table.string('ownerName').notNullable();
//     table.number('cnpjOrCpf').notNullable();
//     table.string('nickName').notNullable();
//     table.string('cep').notNullable();
//     table.string('address').notNullable();
//     table.string('number').notNullable();
//     table.number('city').notNullable();
//     table.string('neighborhood').notNullable();
//     table.string('state', 2).notNullable();
//     table.string('brand').notNullable();
//     table.string('model').notNullable();
//     table.string('year').notNullable();
//     table.string('km').notNullable();
//     table.string('board').notNullable();
//     table.string('parts').notNullable();
//     table.decimal('valueOfLabor').notNullable();
//     table.string('description').notNullable();
//     table.decimal('totalValue').notNullable();
//   })
// };

// exports.down = function(knex) {
//   return knex.schema.dropTable('order_of_service')
// };

import connection from'../database/connection'

class signupController {
  async create(req, res) {
    const { companyName, name, cnpj, cpf, email, confirmEmail, password, confirmPassword } = req.body

    if (name <= 8) {
      return res.status(400).json({ massage: 'O nome contem menos de 8 caracteres!' })

    } else if (cnpj <= 14) {
      return res.status(400).json({ message: 'O CNPJ contem menos de 14 caracteres!' })

    } else if (cpf <= 11) {
      return res.status(400).json({ message: 'OCPF contem menos de 11 caracteres!' })

    } else if (email !== confirmEmail) {
      return res.status(400).json({ error: 'Os emails são diferentes, verifique e tente novamente!' })

    } else if (password !== confirmPassword) {
      return res.status(400).json({ error: 'As senhas são diferentes, verifique e tente novamente!' })
    }

    const body = {
      companyName,
      name,
      cnpj,
      cpf,
      email,
      confirmEmail,
      password,
      confirmPassword
    }

    await connection('users').insert(body)

    return res.status(201).json({ message: 'Usuario criado com sucesso!' })
  }
}

export default new signupController()