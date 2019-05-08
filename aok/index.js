const app = require('./app')
const port = 8080

module.exports = app.listen(port, () => {
  console.log(`app listen http://127.0.0.1:${port}`)
})
