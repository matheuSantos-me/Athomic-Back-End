import connection from '../database/connection'

class signinController {
  async create(req, res) {
    const { email, password } = req.body

    const login = await connection('users')
      .where({ email, password })

    if (!login) {
      return res.status(400).json({ error: 'Email ou senha invalidos, Por favor verifique os dados e tente novamente!' })
    }

    return res.status(200).json({ message: 'Login' })
  }
}

export default new signinController()