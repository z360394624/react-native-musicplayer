import { CHANGE_COLOR } from './TYPES'

export function changeSkin(skin){
  return {
    type: CHANGE_COLOR,
    skin: skin
  }
}