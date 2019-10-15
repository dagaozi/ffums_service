const {HttpException}=require('../../core/model/http-exception')
const {ErrorModel}=require('../../core/model/resModel1')
// const env=process.env.NODE_ENV // 环境变量
const catchError= async(ctx,next)=>{
  try {
    await next()
  } catch (error) {
    const isHttpException=error instanceof HttpException
    const isDebug=global.config.isDebug   
    if(!isHttpException && isDebug){
    throw error
    }
   
    if(isHttpException) {
    ctx.body=new ErrorModel(error.errorCode,error.msg)
   // ctx.status=error.code;
    }else if(error.name.indexOf("Sequelize")!==-1){
      ctx.body=new ErrorModel(666,"数据库错误：")
    }
    else{
      ctx.body=new ErrorModel(999,"服务器出了点问题")
    }
  }
}
module.exports=catchError