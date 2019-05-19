const { Router } = require('aok')
const Route = new Router()

Route.get('/users', async (ctx) => {
  ctx.body = 123123
})

module.exports = Route