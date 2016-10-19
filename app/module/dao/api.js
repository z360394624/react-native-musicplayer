'use strict';

import Env from '../constant/Env'
const API_URL_IntroduceList = `${Env.serverURL}/RNMusicPlayer/introducelist`
const API_URL_musicpageListPlan = `${Env.serverURL}/musicpage/suggestplan/listdata`


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

DataRepository.prototype.fetchMusicpageListPlan = function () {
  return fetchData(API_URL_musicpageListPlan)
}
module.exports = DataRepository