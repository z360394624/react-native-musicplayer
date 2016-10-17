'use strict'

import * as Types from '../action/types'

let initialMusic = {
  xx: 'xxx',
  text:'content',
  sss:'xxxxdsfsd'
}

export default function music(state = initialMusic, action){
  switch (action.type){
    case Types.MUSIC:{
      return {
        ...state,
        musiclist: action.musiclist
      }
    }
      break
    default: 
      return state
  }
}