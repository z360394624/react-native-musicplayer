var log4js = require('log4js')
var loggerDir = require('../../config').loggerDir
var path = require('path')
var uuid = require('uuid')
var fs = require('fs')

var filename = loggerDir+path.sep+'approval'+'.log'
if(!fs.existsSync(loggerDir)){
  fs.mkdir(loggerDir)
}else if(fs.statSync(filename).size>1 * 1024 * 1024 * 1024 * 20){
  fs.unlinkSync(filename)
}


log4js.configure({
  appenders: [
    {type: 'console' },
    {type: 'file', filename: filename, category:'cheese'}
  ]
})

var logger = log4js.getLogger('cheese')
logger.setLevel('INFO')


module.exports.logger = logger