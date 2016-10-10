var express = require('express');
var router = express.Router();
var request = require('request')
var md5 = require('md5')
var api = require('../modules/service/approval')
var logger = require('../modules/logger').logger
var _ = require('lodash')
var async = require('async')


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


module.exports = router;
