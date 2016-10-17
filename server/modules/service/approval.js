var request = require('request')
var md5 = require('md5')
var logger = require('../logger').logger
var _ = require('lodash')
var fs = require('fs');  
var config = require('../../config')
var restler = require('restler')
var auth = require('../../api/auth')


function getApprovalByFormid(formId, token, callback){
  // console.log(req.session)
  var str = 'params'+ formId + 'DnWX83SksBoctyoVDmEkyEDuzB6i2RUyWY4A9mBCKBDa0IgHDjihin31rzDU'
  var result = md5(str)
  var url = config.serverUrl+'corp/getReleasePassData?params='+ formId +'&signature='+result+'&token='+token
  request.post({url: url}, function (err, response, body) {
    if(err){
      logger.error('get approval by formid wrong')
      callback('error',null)
      return
    }

    try{
      var data = JSON.parse(body)
      callback(null, data)
    }catch(e){
      callback(null, '404')
    }
    logger.info('get detail data success')
  })
}

function rejectAPI(approve, callback){
  var url = config.serverUrl + 'corp/RejectWF'
  var params = {
    WFType:'ReleasePassApp',
    Data:{
      currentUser: approve.currentUser,
      fApproveType: '',
      approveType:approve.approveType,
      workItemId: approve.workItemId,
      formId: approve.formId,
      reason: approve.reason
    }
  }
  var formData = {
    params: JSON.stringify(params)
  }
  request.post({url:url, formData:formData}, function (err, httpResponse, body) {
    if(err){
      callback('error', null)
      return
    }

    var data = null
    try{
      data = JSON.parse(body)
      callback(null, data)
    }catch(e){
      console.log(e)
      logger.error('reject 驳回接口数据不对')
    }    
  })
}

function resolveAPI(approve, callback){
  var url = config.serverUrl + 'corp/ApproveWF'
  //9937B3552DE14F3D97B0994A51801B61  workitemid
  //formid 96070726-8494-4a94-a178-55cd4a22477e
  var params = {
    WFType:'ReleasePassApp',
    Data:{
      currentUser: approve.currentUser,
      fApproveType: '',
      approveType:approve.approveType,
      workItemId: approve.workItemId,
      formId: approve.formId,
      reason: approve.reason
    }
  }
  var formData = {
    params: JSON.stringify(params)
  }
  logger.info(JSON.stringify(params))
  request.post({url:url, formData:formData}, function (err, httpResponse, body) {
    if(err){
      callback('error', null)
      return
    }
    try{
      var data = JSON.parse(body)
      callback(null, data)
    }catch(e){
      logger.error('同意接口返回数据出错')
    }
    // if(err){
    //   logger.error('post reject error')
    //   return
    // }
    // callback(body)
  })
}



// function getTaskList(){
//   var url = 'http://10.60.217.153:25041/dji-imService/im/corp/getTasksForReleasePass'
//   var params = {
//     CurrentUser: 'ag-test001'
//   }
//   var formData = {
//     params: JSON.stringify(params)
//   }
//   request.post({url: url, formData: formData}, function (err, httpResponse, body) {
//     console.log('xxxxxxxx')
//     console.log(body)
//   })
// }
// getTaskList()

//通过ad获取列表信息
function getApproveListByAd(ad, callback) {
  var url = config.serverUrl + 'corp/getTasksForReleasePass'
  var params = {
    CurrentUser: ad
  }
  var formData = {
    params: JSON.stringify(params)
  }
  request.post({url: url, formData: formData}, function (err, httpResponse, body) {
    if(err){
      callback('error', null)
      return
    }
    var data = null
    try{
      data = JSON.parse(body).result.Data
    }catch(e){
      callback(null, '404')
    }
    if(data){
      callback(null, data)
    }
  })
}




function getAdByToken(token, callback){
  logger.info(token)
  var url = config.serverUrl+'ad/tokenForAd'
  var sigKey = 'i2RUyWY4A9mBCKBDa0IgHDjihin31rzDUDnWX83SksBoctyoVDmEkyEDuzB6'
  var userToken = auth.cbcEncrypt(token)

  var signature = md5('token'+userToken+sigKey)
  var postData = {
    "token": userToken, 
    "signature": signature
  }

  var postOptions = {
    url: url,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    form: postData
  }
  request(postOptions, function (error, response, body) {
    body = JSON.parse(body)
    var ad = body['result']['ad']

    try{
      var userAd = auth.ecbDecrypt(ad)
      callback(null, userAd)
    }catch(e){
      callback('error', null)
      return
    }
  })
}



function getCurrentUserByFormId(formId, token, callback){

  var str = 'params'+ formId + 'DnWX83SksBoctyoVDmEkyEDuzB6i2RUyWY4A9mBCKBDa0IgHDjihin31rzDU'
  var result = md5(str)
  var url = config.serverUrl+'corp/GetCurrentUserByFormId?params='+ formId +'&signature='+result+'&token='+token
  request.post({url: url}, function (err, response, body) {
    if(err){
      logger.error('get GetCurrentUserByFormId error')
      callback('error',null)
      return
    }
    callback(null, body)
    // try{
    //   console.log(body)
    //   var data = JSON.parse(body)
    //   console.log(data)
    //   callback(null, data)
    //   logger.info(data.goodsGiveOutUnit)
    // }catch(e){
    //   throw new Error("无数据记录")
    // }
    // logger.info('get 当前处理人成功')
  })
}


function checkUserIsScurity(currentUser, goodsGiveOutUnit, callback) {
  var url = config.serverUrl + 'corp/CheckIsSecurityGuard'
  var params = {
        currentUser: currentUser,
        goodsGiveOutUnit: goodsGiveOutUnit
    }
  var formData = {
    params: JSON.stringify(params)
  }
  request.post({url:url, formData:formData}, function (err, httpResponse, body) {
    console.log(body, 'is checkUserIsScurity')
    if(body == null || body==''){
      callback('error', null)
      return
    }
    callback(null, body)
    // if(err){
    //   callback('error', null)
    //   return
    // }

    // var data = null
    // try{
    //   data = JSON.parse(body)
    //   callback(null, data)
    // }catch(e){
    //   console.log(e)
    //   logger.error('reject 驳回接口数据不对')
    // }    
  })
}


module.exports.getApproveListByAd = getApproveListByAd
module.exports.getApprovalByFormid = getApprovalByFormid
module.exports.resolveAPI = resolveAPI
module.exports.rejectAPI = rejectAPI
module.exports.getAdByToken = getAdByToken
module.exports.getCurrentUserByFormId = getCurrentUserByFormId
module.exports.checkUserIsScurity = checkUserIsScurity

