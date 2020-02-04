/*
指标配置项
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:57:14 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-19 16:12:41
 */

const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class ItemConfig extends Model {
  
}
ItemConfig.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(), 
  categoryId:Sequelize.INTEGER,
  inputType: Sequelize.STRING(2),
  typeOption: Sequelize.STRING(),
  sort:Sequelize.INTEGER(5)
},
  {
    sequelize,
    timestamps: true,
    tableName: 'item_config'
  })
module.exports = {
  ItemConfig
}