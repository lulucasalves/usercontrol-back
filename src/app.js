const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const morgan = require('morgan')
require('./config/Connection')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(morgan('start'))
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE')
      res.header(
        'Access-Control-Allow-Origin',
        'Access, Content-type, Authorization, Acept, Origin, X-Requested-With'
      )
      this.app.use(cors())
      next()
    })
  }

  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app
