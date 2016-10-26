const RN = require('react-native')
import Env from '../../../module/constants/Env'


export default function showToast(text) {
  if(Env.os === 'ios'){
    let AlertIOS = RN.AlertIOS
    AlertIOS.alert(text)
    return
  }
  const ToastAndroid = RN.ToastAndroid
  ToastAndroid.showWithGravity(text, 1500, ToastAndroid.CENTER)
}