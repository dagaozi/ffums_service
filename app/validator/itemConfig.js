const { Sequelize } = require('sequelize')
const { Rule, Validator, isNotEmpty } = require('../../core/utils/baseValidator')
const {ItemConfig}=require('../model/itemConfig')
class ItemConfigV extends Validator{
  constructor(){
    super()
    this.name=[
      new Rule('isLength','名称需小于12个字符',{
        max:255
      })
    ]
    this.categoryId=[
      new Rule('isInt','需要整数类型')
    ]
    this.inputType=[
      new Rule('isLength','名称需小于2个字符',{
        max:2
      })
    ]
    this.typeOption=[
      new Rule('nullable'),
      new Rule('isLength','名称需小于255个字符',{
        max:255
      })
    ]
    this.sort=[
      new Rule('nullable'),
      new Rule('isInt','需要整数类型'),
      new Rule('isLength','需小于6位数',{
        max:5
      }),
    ]
  }

}
class AddItemConfigV extends ItemConfigV{
  constructor(){
    super()
  }
  async validateName(vals){
    const {name,categoryId}=vals.body
    const item= await ItemConfig.findOne({
      where:{
        name,
        categoryId
      }
    })
    if(item){
      throw new Error("该类别下已存在相同项目")
    }
  }
}
class UpdateItemConfigV extends ItemConfigV{
  constructor(){
    super()
    this.id=[
      new Rule('isInt','ID格式不对')
    ]
  }
  async validateName(vals){
    const {id,name,categoryId}=vals.body
   const Op=Sequelize.Op
    const item= await ItemConfig.findOne({
      where:{
        [Op.and]: [
          {
            id: {
              [Op.ne]: id
            }
          },
          {
            name: name
          },
          {
            categoryId: categoryId
          }
        ]
      }
    })
    if(item){
      throw new Error("该项目在当前目录下已存在")
    }
  }
}
module.exports={
  AddItemConfigV,
  UpdateItemConfigV
}