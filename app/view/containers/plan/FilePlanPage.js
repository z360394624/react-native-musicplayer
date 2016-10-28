import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// import RNFS from 'react-native-fs'
// import RNFetchBlob from 'react-native-fetch-blob'
import Env from '../../../module/constants/Env'


// RNFS.readdir('/storage/emulated/0/Pictures/Screenshots')
// .then((result) => {
//   console.log(result)
// })


// RNFetchBlob.fetch("GET", Env.serverURL+'/avatar/GT.png')
// .then((res) => {
//   console.log(res.base64())
// })

// RNFetchBlob.fetch('POST', Env.serverURL+'/RNMusicPlayer/upload', {
//     // dropbox upload headers
//     Authorization : "Bearer access-token...",
//     'Dropbox-API-Arg': JSON.stringify({
//       path : 'file:///storage/emulated/0/Pictures/Screenshots/Screenshot_2016-08-06-09-33-36.png',
//       mode : 'add',
//       autorename : true,
//       mute : false
//     }),
//     'Content-Type' : 'application/octet-stream',
//     // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
//     // Or simply wrap the file path with RNFetchBlob.wrap().
//   }, RNFetchBlob.wrap('file:///storage/emulated/0/Pictures/Screenshots/Screenshot_2016-08-06-09-33-36.png'))
//   .then((res) => {
//     console.log(res.text())
//   })
//   .catch((err) => {
//     // error handling ..
//   })






// function uploadfile(base64ImageString){
//   RNFetchBlob.fetch('POST', Env.serverURL+'/RNMusicPlayer/upload', {
//       'Content-Type' : 'application/octet-stream',
//       // here's the body you're going to send, should be a BASE64 encoded string
//       // (you can use "base64"(refer to the library 'mathiasbynens/base64') APIs to make one).
//       // The data will be converted to "byte array"(say, blob) before request sent.  
//     }, base64ImageString)
//     .then((res) => {
//       console.log(res.text())
//     })
//     .catch((err) => {
//       // error handling ..
//     })
// }

// let uri = '/storage/emulated/0/Pictures/Screenshots/Screenshot_2016-08-06-09-33-36.png'
// RNFS.readFile('/storage/emulated/0/Pictures/Screenshots/Screenshot_2016-08-06-09-33-36.png', 'base64')
// .then((data) => {
//   uploadfile(data)
// })


// let formData = new FormData()

// formData.addend('file', {uri: uri, type:})
export default class FilePlanPage extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <Image style={{width:100,height:100}} source={{uri:'file:///storage/emulated/0/Pictures/Screenshots/Screenshot_2016-08-06-09-33-36.png'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'blue'
  }
})