import { combineReducers } from 'redux'

import music from './music'
import navigator from './navigator'
import skin from './skin'

export default combineReducers({
  music: music,
  navigator: navigator,
  skin: skin
})