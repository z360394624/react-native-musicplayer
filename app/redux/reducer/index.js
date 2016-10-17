import { combineReducers } from 'redux'

import music from './music'
import globalcon from './globalcon'

export default combineReducers({
  music: music,
  globalcon: globalcon
})