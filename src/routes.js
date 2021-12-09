const { Router } = require('express')
const UserController = require('./controllers/UserController')
const LoginController = require('./controllers/LoginController')
const AuthMidleware = require('./midlewares/AuthMidleware')

const routes = new Router()

routes.post('/register', UserController.store)
routes.get('/users', AuthMidleware, UserController.show)
routes.post('/login', LoginController.index)

module.exports = routes
