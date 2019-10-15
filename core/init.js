const Router=require('koa-router')
const requireDirectory=require('require-directory')
class InitManager{
  //入口方法
  static initCore(app){
    InitManager.app=app
    InitManager.initLoadRouters(app)
    InitManager.loadHttpException()
    InitManager.loadConfig()
    InitManager.dbsy()
  }
  //初始化路由（动态加载路由）
  static initLoadRouters(){
    const routesDirectory=`${ process.cwd()}/app/routes`
    requireDirectory(module,routesDirectory,{visit:loadModule})
    function loadModule(obj) {  
      if(obj instanceof Router){
        InitManager.app.use(obj.routes(),obj.allowedMethods())
      }
    }
  }
  //全局挂载异常类
  static loadHttpException(){
    const errors=require('./model/http-exception')
    global.errors=errors
  }
    //全局挂载环境新（有别于package.josn中的环境）
  static loadConfig(path=''){
    const configPath=path||process.cwd()+'/conf/config.js'
    console.log("configpath",configPath);
    
    const config=require(configPath)
    global.config=config
    
  }
  //更新数据库
  static dbsy(){
    //来自dagaozi的忠告，生产环境严禁执行此操作,会重置数据库，相当于删库，跑路
    if(global.config.isDebug){
    //const initDB=require('../app/db/dbsync')
    }
    
  }
}
module.exports=InitManager