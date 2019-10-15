const basicAuth=require('basic-auth')
const {Forbidden}=require('../../core/model/http-exception')
const jwt=require('jsonwebtoken')
class Auth{
  constructor(level){
    this.level=level ||1
    Auth.ADMIN=9
    Auth.SUER=6
    Auth.USER=3
  }
  //m是个属性，不是方法
  get m(){
    return async (ctx,next)=>{
      const token=basicAuth(ctx.req)  //ctx.req获取nodejs原生的请求对象， ctx.request获取的是koa封装过后的请求对象
      //没有token
      if(!token||!token.name){
        throw new Forbidden('token无效')
      }
      let decode
      try {
        decode= jwt.verify(token.name,global.config.security.secretKey)
      } catch (error) {
        if(error.name=='TokenExpiredError'){
          throw new Forbidden('token已过期')
        }else{
          throw new Forbidden('token无效')
        }
      }
      //定义接口权限，如果token中的用户等级小于接口等级，报权限不足
      if(decode.scope<this.level){
        throw new Forbidden('权限不足')
      }
        //把token中的uid,scope保存在ctx.auth中
      ctx.auth={
        uid:decode.uid,
        scope:decode.scope
      }
      await next()
    }
  }
  //验证令牌有效性
  static verifyToken(token){
    try {
       jwt.verify(token,global.config.security.secretKey)
       return true
    } catch (error) {
      console.log("验证token有效性",error.name);
      
      return false
    }
  }
}
module.exports={
  Auth
}