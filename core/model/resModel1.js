// class BaseModel{
//   constructor(data,message){
//     if(typeof data === 'string') {
//       this.message=data
//       data=null
//       message=null
//     }
//     if(data){
//       this.data=data
//     }
//     if(message){
//       this.message=message
//     }
//   }
// }
class SuccessModel {
  constructor(data){
    this.hasError=0
    this.data=data
    this.errorMessage=""
  }
}
class ErrorModel {
  constructor(errorCode=-1,msg="服务器错误"){
    if(typeof errorCode === 'string') {
    this.hasError=-1
    this.errorMessage=errorCode
   }else{
   if(errorCode)
   {
     this.hasError=errorCode
   }
   if(msg){
     this.errorMessage=msg
   }
  }
 }
}
module.exports={
  SuccessModel,
  ErrorModel
}