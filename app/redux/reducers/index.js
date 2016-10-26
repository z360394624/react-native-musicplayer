import { combineReducers } from 'redux'

import music from './music'
import navigator from './navigator'

export default combineReducers({
  music: music,
  navigator: navigator
})