import RX from 'rxjs'
import { MOUNT_MUSIC, NET_CONNECT_ERROR, PULL_MUSIC_DONE } from './TYPES'
import { postMusic } from '../../module/net/music'
import { onNetError } from '../../module/net/error'


export function mountMusic(){
  return {
    type: MOUNT_MUSIC
  }
}


function onMountMusic(responseJson){
  return {
    type: PULL_MUSIC_DONE, 
    data: responseJson.data
  }
}



export function pullMusicEpic (action$) {
  return action$.ofType(MOUNT_MUSIC)
    .mergeMap((action) => {
      return postMusic()
        .map(onMountMusic)
        .catch((error) => Rx.Observable.of(onNetError(error)))
    })
}
//action$流 判断type 是否为MOUNT_MUSIC  触发网络请求  返回的也是观察者对象  然后和action合并 成功后type转换为PULL_MUSIC_DONE