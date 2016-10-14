var express = require('express');
var router = express.Router();
var request = require('request')
var md5 = require('md5')
var api = require('../modules/service/approval')
var logger = require('../modules/logger').logger
var _ = require('lodash')
var async = require('async')
var fs = require('fs')
var path = require('path')
var formidable = require('formidable')
var util = require('util')

router.get('/RNMusicPlayer/introducelist', function(req, res, next) {
  logger.info('get approve rout  get get get')
  var welcomeData = require('../mock/welcomePageList').welcomeListTest
  res.send({
    status: 200,
    data: welcomeData,
    message: 'success'
  })
  //获取放行单详细信息
});


router.post('/RNMusicPlayer/upload', function (req, res, next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    console.log(fields, files)
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  })
})


router.get('/files', function (req, res, next) {
  console.log('get in files')
  var filePath = path.join(__dirname, './');
  fs.readdir(filePath, function(err, results){
    if(err) throw err;
    if(results.length>0) {
      var files = [];
      results.forEach(function(file){
        if(fs.statSync(path.join(filePath, file)).isFile()){
          files.push(file);
        }
      })
      console.log(files)
      res.send('xxxx')
    } else {
      res.end('当前目录下没有文件');
    }
  });
})

router.get('/download', function (req, res, next) {

})
module.exports = router;
