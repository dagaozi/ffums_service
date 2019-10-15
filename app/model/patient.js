/*
患者
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:06:18 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-12 20:12:21
 */
const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class Patient extends Model {
  static async getPatientByConditon(query) {
    const {name,idCard,inPatientId}= query
    const Op = Sequelize.Op;
    let finder=new Array()
    if(name){
      finder.push({
        name: {
          [Op.like]: `%${name}%`
        }
      })
    }
    if(idCard){
      finder.push({
        idCard: {
          [Op.like]: `%${idCard}%`
        }
      })
    }
    if(inPatientId){
      finder.push({
        inPatientId: {
          [Op.like]: `%${inPatientId}%`
        }
      })
    }  
    const list = await Patient.findAll({
      where: {
        [Op.or]: finder
      },
      order: [
        ['createdAt', 'DESC']
      ]
    })
    return list
  }
}
//通过下面的方法去掉该对象不需要返回给前端的字段
//Patient.prototype.exclude=['id','name']
Patient.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(12)
  },
  gender:{
    type: Sequelize.STRING(1),
    set(val){
      let temp
      if(val==='男'){
      temp=1
      }else if(val==='女'){
        temp=0
      }
      this.setDataValue('gender',temp)
    }
  },
  idCard:{
    type:Sequelize.STRING(18),
    unique: true
  },
  inPatientId:{
    type:Sequelize.STRING(18),
  },
  mzId:{
    type:Sequelize.STRING(18),
  },
  department:Sequelize.STRING(11),
  phone1:Sequelize.STRING(11),
  phone2:Sequelize.STRING(11),
  address: Sequelize.STRING(30),
  remark: Sequelize.TEXT()
},
  {
    sequelize,
    timestamps: true,
    tableName: 'patient'
  })
module.exports = {
  Patient
}