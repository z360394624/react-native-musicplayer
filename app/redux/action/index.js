'use strict'

import * as Types from './types'


export function newMusic(musiclist){
  return{
    type: Types.MUSIC,
    musiclist: musiclist
  }
}