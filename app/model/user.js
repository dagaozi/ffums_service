/*
用户
 * @Author: dagaozi 
 * @Date: 2019-09-24 16:26:56 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-07 15:02:24
 */
const bcrypt=require('bcryptjs')
const { Sequelize, Model } = require('sequelize')
// const {sequelize:db}=require('../db/orm') 重命名 相当于es6里面的 sequelize as db
const { sequelize } = require('../db/orm')
const { HttpException } = require('../../core/model/http-exception')
class User extends Model {
  static async login(account,password){
     const user=await User.findOne({
       where :{
         name:account
       }
     })
     if(!user){
       throw new HttpException("用户不存在")
     }
     const result=bcrypt.compareSync(password,user.password)
     if(!result){
      throw new HttpException("密码错误")
     }
     return user
  }
}
User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(12),
    unique: true
  },
  password:{
    type: Sequelize.STRING(60),
    set(val){
      const salt=bcrypt.genSaltSync(10) //盐
      const pwd=bcrypt.hashSync(val,salt)
      this.setDataValue('password',pwd)
    }
  },
  grade: Sequelize.INTEGER(3),
  last_login: Sequelize.DATE
},
  {
    sequelize,
    timestamps: false,
    tableName: 'user'
  })
module.exports = {
  User
}