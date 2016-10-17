'use strict'

import * as Types from './types'


export function newMusic(musiclist){
  return{
    type: Types.MUSIC,
    musiclist: musiclist
  }
}


export function initNavigator(navigator){
  return{
    type: Types.INITNAVIGATOR,
    navigator: navigator
  }
}