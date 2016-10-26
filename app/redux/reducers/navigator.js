
import { MOUNT_NAVIGATOR } from '../actions/TYPES'

export default (state=null, action) => {
  if (action.type === MOUNT_NAVIGATOR) {
    return action.navigator
  }
  return state
}