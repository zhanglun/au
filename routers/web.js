const debug = require('debug')('au')
const path = require('path')
const glob = require('glob')

const { readFileSync } = require('fs')
const { Router } = require('aok')
const Route = new Router()

const getManifest = () => {
  const filename = path.join(__dirname, '../public/assets/manifest.json')
  const result = readFileSync(filename)

  return JSON.parse(result.toString())
}

Route.get('/', async (ctx) => {
  const manifest = getManifest()

  await ctx.render('pages/home', {
    manifest: manifest,
  })
})

module.exports = Route;