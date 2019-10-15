const{SuccessModel,ErrorModel}=require('../../core/model/resModel')
module.exports=async(ctx,next)=>{
  if(ctx.request.header.token){
    await next()
    return
  }
  ctx.body=new ErrorModel("未登录")
}