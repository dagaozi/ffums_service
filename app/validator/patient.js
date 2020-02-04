const { Sequelize } = require('sequelize')
const { Rule, Validator, isNotEmpty } = require('../../core/utils/baseValidator')
const {Patient}=require('../model/patient')
class PatientV extends Validator{
  constructor(){
    super()
    this.name=[
      new Rule('isLength','名称需小于12个字符',{
        max:12
      })
    ]
    this.idCard=[
      new Rule('isLength','身份证长度为18位',{
        min:18,
        max:18
      })
    ]
  }

}
class AddPatientV extends PatientV{
  constructor(){
    super()
  }
  async validateIdCard(vals){
    const idCard=vals.body.idCard
    const patient= await Patient.findOne({
      where:{
        idCard
      }
    })
    if(patient){
      throw new Error("已存在相同身份证的用户")
    }
  }
}
class UpdatePatientV extends PatientV{
  constructor(){
    super()
    this.id=[
      new Rule('isInt','患者ID格式不对')
    ]
  }
  async validateIdCard(vals){
    const idCard=vals.body.idCard
    const id=vals.body.id
   const Op=Sequelize.Op
    const patient= await Patient.findOne({
      where:{
        [Op.and]: [
          {
            id: {
              [Op.ne]: id
            }
          },
          {
            idCard: idCard
          }
        ]
      }
    })
    if(patient){
      throw new Error("已存在相同身份证的用户")
    }
  }
}
module.exports={
  AddPatientV,
  UpdatePatientV
}