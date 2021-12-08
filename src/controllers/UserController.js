const User = require('../models/User')
const bcrypt = require('bcryptjs')

class UserController {
  show(req, res) {
    const users = ['Kaio', 'Lucas']

    return res.json(users)
  }

  async store(req, res) {
    let userExist = await User.findOne({ email: req.body.email })

    if (userExist) {
      return res.status(400).json({
        error: true,
        mensage: 'Este usuário já existe'
      })
    }

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        error: true,
        mensage: 'Insira todas as informações'
      })
    } else {
      const data = { name, email, password }
      data.password = await bcrypt.hash(data.password, 8)

      await User.create(data, err => {
        if (err)
          return res.status(400).json({
            error: err,
            message: 'Erro ao tentar inserir usuário no MongoDB'
          })

        return res.status(200).json({
          error: false,
          message: 'Usuário Cadastrado com sucesso'
        })
      })
    }
  }
}

module.exports = new UserController()
