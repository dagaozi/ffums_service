/*指标记录
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:23:06 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-09-24 12:28:40
 */
const router = require('koa-router')()
router.prefix('/record')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router