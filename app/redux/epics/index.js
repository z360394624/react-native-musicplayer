
import { combineEpics } from 'redux-observable'

import { pullMusicEpic } from '../actions/music'

export default combineEpics(
  pullMusicEpic
)
