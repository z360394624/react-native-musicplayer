'use strict'

import * as Types from '../action/types'

let initGlobalcon = {}

export default function globalcon(state = initGlobalcon, action){
  switch (action.type){
    case Types.INITNAVIGATOR:{
      return {
        ...state,
        navigator: action.navigator
      }
    }
      break
    default: 
      return state
  }
}