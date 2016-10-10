var constant = require('./modules/constant')
var path = require('path')

var config = {
  port: 3000,
  loggerDir: path.resolve(constant.ROOT,'log'),
  keywords:'test',
  session_secret:'zcm199335',
  redis_port:6379,
  redis_host:'127.0.0.1',
  approve_reject: 'http://10.60.217.94:25041/dji-imService/im/corp/RejectWF',
  approve_resolve: 'http://10.60.217.94:25041/dji-imService/im/corp/ApproveWF',
  redis_password:'',
  redis_db: 0,
  getAd: 'http://10.60.217.94:25041/dji-imService/im/ad/tokenForAd',
  getAppList: 'http://10.60.217.94:25041/dji-imService/im/corp/getTasksForReleasePass',
  getApproval: 'http://10.60.217.94:25041/dji-imService/im/corp/getReleasePassData',
  serverUrl: 'http://10.60.17.66:3000/',

}

module.exports = config