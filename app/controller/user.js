/*用户controller
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:24:36 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-09-24 15:52:13
 */
const {exec}= require('../db/mysql')
const Login=async (username,password) => {
  let sql=`select * from usertest where 1=1`
  return await exec(sql)
}
module.exports={
  Login
}