'use strict'

import { CHANGE_SKIN } from '../actions/TYPES'

let initialSkin = {
  color: '#3e7ee7'
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