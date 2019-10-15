/*
一次随访指标记录表(指标记录横表)
方便数据导出
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:59:03 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-07 15:20:28
 */
const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class FollowUpRecord extends Model {
}
FollowUpRecord.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  followId:Sequelize.INTEGER, 
  patientId: Sequelize.INTEGER,
  patientName: Sequelize.STRING(12),
  idCard: Sequelize.INTEGER(18),
  inPatientId: Sequelize.STRING(18),
  mzId: Sequelize.STRING(18),
  followName: Sequelize.STRING(12),
  dateTime: Sequelize.DATE,
  type: Sequelize.STRING(2),
  content:Sequelize.TEXT()
},
  {
    sequelize,
    tableName: 'follow_up_record'
  })
module.exports = {
  FollowUpRecord
}