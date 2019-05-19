// const path = require('path');
// const Koa = require('koa');
// const koaStatic = require('koa-static');
// const koaBody = require('koa-body/index');
// const koaNunjucks = require('koa-nunjucks-2');
//
const router = require('./routers')
//
// const app = new Koa();
//
// app.root = path.resolve(__dirname, '../');
//
// app.use(koaNunjucks({
//   ext: 'njk',
//   path: path.join(__dirname, '../views'),
//   nunjucksConfig: {
//     trimBlocks: true
//   }
// }));
//
// app.use(koaStatic(path.resolve(__dirname, '../public')));
// app.use(koaBody());
//
// app.use(router);
//
// app.use(async (ctx, next) => {
//   const start = new Date().getTime();
//   await next();
//   const ms = new Date().getTime() - start;
//
//   ctx.set('X-Response-Time', `${ms}ms`)
// });
//
// app.use(async (ctx, next) => {
//   console.log('url: ', ctx.request.method, ctx.url);
// });

const Aok = require('aok')
const app = new Aok()

app.registerRoute(router)

app.on('error', err => {
  console.log('server error', err)
})

module.exports = app
