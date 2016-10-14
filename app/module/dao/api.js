'use strict';

import Env from '../constant/Env'
const API_URL_IntroduceList = `${Env.serverURL}/RNMusicPlayer/introducelist`

function DataRepository(){
  if (typeof DataRepository.instance === 'object'){
    return DataRepository.instance
  }
  DataRepository.instance = this
}


function fetchData (url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
    })
    .then((response) => response.json())
    .then((responseData) => {
      resolve(responseData)
    })
    .catch((error) => {
      console.log('error')
      resolve(null)
    })
  })
}

DataRepository.prototype.fetchIntroduce = function () {
  return fetchData(API_URL_IntroduceList)
}
module.exports = DataRepository