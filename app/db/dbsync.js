var sequelize = require('./orm.js').sequelize;
var fs = require('fs');
//var files = fs.readdirSync('../model');
var files = fs.readdirSync(process.cwd()+ '/app/model/');
//var files = fs.readdirSync(__dirname + '/app/models');
var js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);
console.log(js_files);
  for (var f of js_files) {
    console.log(`import model from file ${f}...`);
    var name = f.substring(0, f.length - 3);
    //module.exports[name] = require('../model' + f);
    module.exports[name] = require(process.cwd()+ '/app/model/' + f);
    //module.exports[name] = require(__dirname + '/app/models/' + f);
}
sequelize.sync({
  force:true  //作死更新，危险操作
}
);
