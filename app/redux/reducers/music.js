'use strict'

import { MOUNT_MUSIC, PULL_MUSIC_DONE } from '../actions/TYPES'

let initialMusic = {
  xx: 'xxx',
  text:'content',
  sss:'xxxxdsfsd'
}

export default function music(state = initialMusic, action){
  switch (action.type){
    case PULL_MUSIC_DONE:{
      return {
        ...state,
        musiclist: action.data
      }
    }
      break
    default: 
      return state
  }
}