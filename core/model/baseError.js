class BaseError{
  constructor(data,message){
    if(typeof data === 'string') {
      this.message=data
      data=null
      message=null
    }
    if(data){
      this.data=data
    }
    if(message){
      this.message=message
    }
  }
}
class SuccessModel extends BaseError{
  constructor(errorMessage,data){
    super(errorMessage,data)
    this.hasError=0
  }
}
class ErrorModel extends BaseError{
  constructor(hasError,errorMessage,data){
   if(arguments.length=3){
    super(errorMessage,data)
    this.hasError=hasError
   }
   else if(arguments.length=2){
      if(typeof hasError === 'string') {
        this.hasError=-1
        this.errorMessage=hasError
      }else{
        this.hasError=hasError
        this.errorMessage=errorMessage
      }
    }
    else if(arguments.length=1){
      this.hasError=-1
      this.errorMessage=hasError
    }
  }
}
module.exports={
  SuccessModel,
  ErrorModel
}