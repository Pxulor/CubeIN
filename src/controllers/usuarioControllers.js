const UserSchema = require('../models/usuarioSchema')
const bcrypt = require("bcrypt");

const exibeUsuarios = async (request, response) => {
  try {
    const todosUsers = await UserSchema.find()
    response.status(200).json(todosUsers)
  } catch (error) {
    response.status(500).send({
      message: error.message
    })
  }
}

const criarUsuarios = async (request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 10)
    request.body.password = hashedPassword
  
    const emailExists = await UserSchema.exists({ email: request.body.email })
    if (emailExists) {
      return response.status(409).send({
        message: 'Erro: Email já cadastrado',
      })
    }
    try {
      const newUser = new UserSchema(request.body)
      const savedUser = await newUser.save()
      response.status(201).send({
        message: 'Usuário criado com sucesso',
        savedUser,
      })
    } catch (err) {
      console.error(err)
      response.status(500).send({
        message: err.message,
      })
    }
  }
  
  module.exports = {
      exibeUsuarios,
      criarUsuarios
  }