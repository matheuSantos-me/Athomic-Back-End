import connection from '../database/connection'

class productsController {
  async index(req, res) {
    const projects = await connection('products').select('*')

    return res.status(200).json(projects)
  }

  async create(req, res) {
    const { user_id, namePartVehicle, brand, purchasePrice, marketValue, codePart, amount, barCode, category, note } = req.body

    const body = {
      user_id,
      namePartVehicle,
      brand,
      purchasePrice,
      marketValue,
      codePart,
      amount,
      barCode,
      category,
      note
    }

    await connection('products').insert(body)

    return res.status(201).json({ message: 'Produto criado com sucesso' })
  }

  async update(req, res) {
    const { id, user_id, namePartVehicle, brand, purchasePrice, marketValue, codePart, amount, barCode, category, note } = req.body

    const body = {
      id,
      user_id,
      namePartVehicle,
      brand,
      purchasePrice,
      marketValue,
      codePart,
      amount,
      barCode,
      category,
      note
    }

    await connection('products').update({
      body
    }).where({ id })

    return res.status(200).json({ message: 'Usuario atualizado com sucesso' })
  }

  async delete(req, res) {
    const { id } = req.params

    await connection('products').where({ id }).del()

    return res.status(200).json({ message: 'Produto deletado com sucesso' })
  }
}

export default new productsController()