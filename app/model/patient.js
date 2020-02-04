/*
患者
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:06:18 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-20 18:38:34
 */
const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
const Op = Sequelize.Op;
//const { HttpException } = require('../../core/model/http-exception')
const { FollowUp } = require('../model/followUp')
const { FollowUpRecord } = require('../model/followUpRecord')
const { ItemRecord } = require('../model/itemRecord')
class Patient extends Model {
  //查询患者
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
  /**
   * 删除患者
   */
  async delete(){
     //删除横表数据
     console.log("删除横表数据");
     await FollowUpRecord.destroy(
      {
        force: true,
        where: {
          patientId:this.id
        }
      }
    )
    const listfollowUp = await FollowUp.findAll({
      //attributes: ['id'],
      where: {
        patientId:this.id
      }
    })
    if (listfollowUp) {
      const followIds = []
      for (const item of listfollowUp) {
        followIds.push(item.id)
      }      
      //删除所有记录
      console.log("删除所有记录");
      await ItemRecord.destroy(
        {
          force: true,
          where: {
            followId: {
              [Op.in]: followIds
            }
          }
        }
      )
      //删除随访表
      console.log("删除随访表");
      await FollowUp.destroy(
        {
          force: true,
          where: {
            id: {
              [Op.in]: followIds
            }
          }
        }
      )
      //删除患者
      console.log("删除患者");
      await this.destroy()
    }
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