/*
指标记录表(竖表)
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:59:03 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-20 18:23:58
 */
const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class ItemRecord extends Model {
}
ItemRecord.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  followId:Sequelize.INTEGER(), 
  itemId: Sequelize.INTEGER(),
  itemValue:Sequelize.STRING(),
  opUserId: Sequelize.INTEGER()
},
  {
    sequelize,
    timestamps: true,
    tableName: 'item_record'
  })
module.exports = {
  ItemRecord
}