import { MOUNT_NAVIGATOR } from './TYPES'

export function mountNavigator (navigator) {
  return {
    type: MOUNT_NAVIGATOR,
    navigator
  }
}