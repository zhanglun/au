const debug = require('debug')('au');
const path = require('path');
const glob = require('glob');
const router = require('koa-router')();
const { readFileSync } = require('fs');

const getManifest = () => {
  const filename = path.join(__dirname, '../public/assets/manifest.json');
  const result = readFileSync(filename);
  const manifests = JSON.parse(result.toString());

  return manifests;
};

router.get('/', async(ctx, next) => {
  const manifest = getManifest();

  await ctx.render('pages/home', {
    manifest: manifest,
  });
});

module.exports = router.routes();
