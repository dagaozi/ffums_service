const env=process.env.NODE_ENV // 环境变量
let MYSQL_CONF
if(env==='dev'){
  MYSQL_CONF={
    host:'localhost',
    user:'root',
    password:'901203',
    port:'3306',
    database:'fllu_db'

  }
}
if(env==='production'){
  MYSQL_CONF={
    host:'localhost',
    user:'root',
    password:'901203',
    port:'3306',
    database:'fllu_db'

  }
}
module.exports={
  MYSQL_CONF
}