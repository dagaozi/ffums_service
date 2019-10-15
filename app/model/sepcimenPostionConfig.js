/*
标本位置配置
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:59:03 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-07 15:20:43
 */
const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class SepecimenPostionConfig extends Model {
}
SepecimenPostionConfig.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:Sequelize.STRING(20)
},
  {
    sequelize,
    tableName: 'sepecimen_postion_config'
  })
module.exports = {
  SepecimenPostionConfig
}