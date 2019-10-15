const { Rule, Validator, isNotEmpty } = require('../../core/utils/baseValidator')
const {User}=require('../model/user')
const {LoginType}=require('../utils/enum')
class  RegisterValidator extends Validator{
  constructor(){
    super()
    this.name=[
      new Rule('isLength','名称长度在3到12个字符直接',{
        min:3,
        max:12
      })
    ]
    this.password1=[
      new Rule('isLength','密码长度不能低于6位',{
        min:6,
        max:12
      })
    ]
    this.password2=this.password1
    this.grade=[
      new Rule('isInt','权限不合法')
    ]
  } 
  validateConfirmPassword(values){
    // const [password1,password2]=[vals.body.password1,vals.body.password2]
    const password1=values.body.password1
    const password2=values.body.password2
    if(password1!==password2)
    throw new Error("两次密码必须相同")
  }
 async validateName(vals){
    const name=vals.body.name
    const user= await User.findOne({
      where:{
        name:name
      }
    })
    if(user){
      throw new Error("该用户名已存在")
    }
  }
}

class LoginValidator extends Validator{
  constructor(){
    super()
    this.account=[ new Rule('isLength','不符合账号规则',{
      min:3,
      max:12
    })
  ]
this.password=[
  new Rule('nullable'),
  new Rule('isLength','至少六位字符',{
    min:6,
    max:12
  })
]
  }
  validateLoginType(vals){
    if(!vals.body.type){
      throw new Error("type是必须参数")
    }
    if(!LoginType.isType(vals.body.type)){
      throw new Error("type参数不合法")
    }
  }
}
class EmptyValidator extends Validator{
  constructor(){
    super()
    this.token=[ new Rule('isLength','不允许为空',{
      min:1
    })
  ]
  }
}
module.exports={
  RegisterValidator,
  LoginValidator,
  EmptyValidator
}