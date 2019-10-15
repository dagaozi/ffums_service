/*用户
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:24:36 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-05 21:05:27
 */

const router = require('koa-router')()
const { Login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../../core/model/resModel1')
const { HttpException } = require('../../core/model/http-exception')
const { createToken } = require('../../core/utils/util')
const { RegisterValidator, LoginValidator,EmptyValidator } = require('../validator/user')
const { User } = require('../model/user')
const { Patient } = require('../model/patient')
const { Auth } = require('../middleware/auth')
const { LoginType } = require('../utils/enum')
router.prefix('/user')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

//新增用户
router.post('/register', async (ctx, next) => {
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    name: v.get('body.name'),
    password: v.get('body.password2'),
    grade: v.get('body.grade')
  }
  //判断条件在校验器中
  await User.create(user)
  ctx.body = new SuccessModel('新增用户成功')


})

//登录
router.post('/login', async (ctx, next) => {
  const v = await new LoginValidator().validate(ctx)
  let token
  switch (v.get('body.type')) {
    case LoginType.USER_PASSWORD:
      token= await loginByPassword(v.get('body.account'), v.get('body.password'))
      break
    case LoginType.USER_PHONE:
      //暂无
      break
    default:
      throw new HttpException("登录方式无效")
  }
  ctx.body=new SuccessModel(token)

})
//验证token是否有效
router.post('/verifyToken',async (ctx, next) => {
  const v=await new EmptyValidator().validate(ctx)
 const result= Auth.verifyToken(v.get('body.token'))
  ctx.body = new SuccessModel(result)
  
})
router.get('/string', new Auth(0).m, async (ctx, next) => {
  console.log("接受请求");
  ctx.body = ctx.auth
})
router.get('/json', async (ctx, next) => {
  let userInfo = await Login("a", "b")
  ctx.body = new ErrorModel("abc")
})

async function loginByPassword(account,password){
  console.log('account-----password',account);
  console.log('account-----password',password);
  
  const user = await User.login(account,password)
  return token = createToken(user.id, user.grade)
}
module.exports = router