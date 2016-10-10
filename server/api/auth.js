var cry = require('crypto')


function cbcEncrypt(text){
  var clearEncoding = 'utf8';
  var algorithm = 'aes-128-cbc';
  var key = '93d10c91b5d294b6e761a2bc6d9155df93d10c91b5d294b6e761a2bc6d9155df';
  key = key.substring(0, 16)
  var iv  = '9cc9917782e650b91b2bb40751870657';
  iv = iv.substring(0, 16)
  var cipher = cry.createCipheriv(algorithm,key,iv);
  var enc = cipher.update(text,clearEncoding,'base64');
  enc += cipher.final('base64');

  return enc
}


function ecbDecrypt(text) {
  var clearEncoding = 'utf8';
  var algorithm = 'aes-128-ecb';
  var key = 'KQB5xuacJNSMfb6wjMnx5yEPR3EUfTn746RfigXSOCTnqSswsGMJwBciKzvbwgOp8jTFTlB'
  var cipher = cry.createDecipher(algorithm,key);
  var dec = cipher.update(text,'base64',clearEncoding);
  dec+= cipher.final(clearEncoding);
  return dec
}



function getImageSize(uri, cb){
  var img = new Image()
  img.src = uri
  img.onload = function () {
    cb(img.width, img.height)
  }
}
module.exports.cbcEncrypt = cbcEncrypt
module.exports.ecbDecrypt = ecbDecrypt
module.exports.getImageSize = getImageSize


// ecbDecrypt('jfG2tKQgtDq/vdCTAwjOZQ==')


