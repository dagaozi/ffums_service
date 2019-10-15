/*
标本记录
 * @Author: dagaozi 
 * @Date: 2019-10-05 19:59:03 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-07 15:21:09
 */
const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
//const { HttpException } = require('../../core/model/http-exception')
class SepecimenRecord extends Model {
}
SepecimenRecord.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  followId:Sequelize.INTEGER, 
  itemId: Sequelize.INTEGER,
  number:Sequelize.INTEGER(3),
  enable:Sequelize.BOOLEAN,
  postion1:Sequelize.STRING(20),
  postion2:Sequelize.STRING(20),
  postion3:Sequelize.STRING(20),
  postion4:Sequelize.STRING(20),
  remark:Sequelize.STRING,
  warning:Sequelize.BOOLEAN,
  opUserId: Sequelize.INTEGER
},
  {
    sequelize,
    tableName: 'sepecimen_record'
  })
module.exports = {
  SepecimenRecord
}