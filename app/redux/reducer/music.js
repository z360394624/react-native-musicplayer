'use strict'

import * as Types from '../action/types'

let initialMusic = {}

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