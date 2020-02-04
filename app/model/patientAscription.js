/*病人归属
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:57:46 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-19 15:26:13
 */

const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class PatientAscription extends Model {
}
PatientAscription.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(12),
  sort: Sequelize.INTEGER(2)
},
  {
    sequelize,
    timestamps: false,
    tableName: 'patient_ascription'
  })
module.exports = {
  PatientAscription
}