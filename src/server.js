const app = require('./app')

var PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
  console.log(`servidor iniciado na porta ${PORT}!`)
})
