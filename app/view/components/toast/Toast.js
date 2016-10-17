const RN = require('react-native')
import Env from '../../../module/constant/Env'


export default function showToast(text) {
  if(Env.os === 'ios'){
    let AlertIOS = RN.AlertIOS
    AlertIOS.alert(text)
    return
  }
  const ToastAndroid = RN.ToastAndroid
  ToastAndroid.showWithGravity(text, 2000, ToastAndroid.CENTER)
}