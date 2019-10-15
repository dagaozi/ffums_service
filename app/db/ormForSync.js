//手动执行：node app/db/dbsync.js 更新数据库结构，需要把dbsync.js和model中的orm.js引用换成引用此文件
const Sequelize=require('sequelize')
const config={
  host: "localhost",
    user: 'root',
    password: '901203',
    port: '3306',
    database: 'fllu_db'
}
const sequelize=new Sequelize(config.database,config.user,config.password,{
  host: config.host,
  dialect: 'mysql',
  port:config.port,
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
module.exports={
 // db:sequelize
 sequelize
}