/*
随访
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:57:30 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-19 15:22:32
 */

const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class FollowUp extends Model {
}
FollowUp.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(12),
  patientId: Sequelize.INTEGER,
  dateTime: Sequelize.DATE,
  type: Sequelize.STRING(2),
  //病理号
  pathologicalNumber:Sequelize.STRING(20),
  note: Sequelize.TEXT()
},
  {
    sequelize,
    timestamps: true,
    tableName: 'follow_up'
  })
module.exports = {
  FollowUp
}