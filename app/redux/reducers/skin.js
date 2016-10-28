'use strict'

import { CHANGE_SKIN } from '../actions/TYPES'

let initialSkin = {
  color: '#1ff371',
  red: 31,
  green: 240,
  blue: 103
}

export default function skin(state = initialSkin, action){
  switch (action.type){
    case CHANGE_SKIN:{
      return {
        ...state,
        ...action.skin
      }
    }
      break
    default: 
      return state
  }
}