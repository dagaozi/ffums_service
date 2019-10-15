const {Sequelize,Model}=require('sequelize')
const {unset,clone,isArray}=require('lodash')
const {
host,
user,
password,
port,
database}=require('../../conf/db').MYSQL_CONF

const sequelize=new Sequelize(database,user,password,{
  dialect: 'mysql',
  host,
  port,
  logging:true,
  timezone:'+08:00',
  // pool:{
  //   max:10,
  //   min:0,
  //   idle:1000
  // },
  define:{
    timestamps:false
    //paranoid:true
  }
})
// sequelize.sync({
//   force:true
// })
Model.prototype.toJSON=function() {  
  let data=clone(this.dataValues)
  unset(data,'updated_at')
  unset(data,'created_at')
  unset(data,'deleted_at')
  //过滤掉不需要的参数
  if(isArray(this.exclude)){
    this.exclude.forEach(val => {
      unset(data,val)
    });
  }
  return data
}
module.exports={
 // db:sequelize
 sequelize
}