/*
标本项目配置
 * @Author: dagaozi 
 * @Date: 2019-10-05 20:21:14 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-07 15:25:55
 */

const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class SpecimenConfig extends Model {
}
SpecimenConfig.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(20),
    unique: true
  }
 
},
  {
    sequelize,
    tableName: 'specimen_config'
  })
module.exports = {
  SpecimenConfig
}