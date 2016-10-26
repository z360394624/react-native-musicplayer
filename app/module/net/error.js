import { NET_CONNECT_ERROR } from '../../redux/actions/TYPES'
import showToast from '../../view/components/common/Toast'

export function onNetError () {
  showToast('网络连接错误,请检查网络连接')
  return {
    type: NET_CONNECT_ERROR,
    errorMsg: '网络连接错误,请检查网络连接'
  }
}