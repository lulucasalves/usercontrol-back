const { Router } = require('express')
const UserController = require('./controllers/UserController')

const routes = new Router()

routes.post('/', UserController.store)
routes.get('/', UserController.show)

module.exports = routes
