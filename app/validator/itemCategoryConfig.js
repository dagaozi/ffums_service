const { Sequelize } = require('sequelize')
const { Rule, Validator, isNotEmpty } = require('../../core/utils/baseValidator')
const {ItemCategoryConfig}=require('../model/itemCategoryConfig')
class ItemCategoryConfigV extends Validator{
  constructor(){
    super()
    this.name=[
      new Rule('isLength','名称需小于12个字符',{
        max:255
      })
    ]
    this.category=[
      new Rule('isLength','名称需小于10个字符',{
        max:10
      })
    ]
    this.sort=[
      new Rule('isInt','需要整数类型'),
      new Rule('isLength','需小于6位数',{
        max:5
      }),
    ]
  }

}
class AddItemCategoryConfigV extends ItemCategoryConfigV{
  constructor(){
    super()
  }
  async validateName(vals){
    const {name,category}=vals.body
    const item= await ItemCategoryConfig.findOne({
      where:{
        name,
        category
      }
    })
    if(item){
      throw new Error("该类别下已存在相同目录")
    }
  }
}
class UpdateItemCategoryConfigV extends ItemCategoryConfigV{
  constructor(){
    super()
    this.id=[
      new Rule('isInt','ID格式不对')
    ]
  }
  async validateName(vals){
    const {id,name}=vals.body
   const Op=Sequelize.Op
    const item= await ItemCategoryConfig.findOne({
      where:{
        [Op.and]: [
          {
            id: {
              [Op.ne]: id
            }
          },
          {
            name: name
          }
        ]
      }
    })
    if(item){
      throw new Error("该目录名称已存在")
    }
  }
}
module.exports={
  AddItemCategoryConfigV,
  UpdateItemCategoryConfigV
}