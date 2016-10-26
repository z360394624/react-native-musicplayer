import { post } from './request'

export function postMusic(){
  return post("RNMusicPlayer/music")
}