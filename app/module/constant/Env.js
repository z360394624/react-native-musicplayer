import { Platform, Dimensions, PixelRatio } from 'react-native'


//关于平台的一些参数

let os = Platform.OS
const { width, height } = Dimensions.get('window') 


const Env = {
  os: os,
  statusBarHeight: os === 'ios' ? 20 : 25,
  osWidth: width,
  osHeight: height,
  pixel: PixelRatio.get(),
  serverURL: 'http://10.60.17.66:3000'
}

export default Env