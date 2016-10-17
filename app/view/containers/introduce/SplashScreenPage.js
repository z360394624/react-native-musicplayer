/*
  关于启动后 过渡页面   还未拉取到数据时的静态展示页面
  继续splashscreen的展示
  @PDD
*/
import React, { Component } from 'react'
import { View, StyleSheet, Image, StatusBar } from 'react-native'
import Env from '../../../module/constant/Env'


export default class SplashScreenPage extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container} >
        <StatusBar hidden={true}/>
        <Image style={styles.img} resizeMode="stretch" source={require('../../../src/img/launch_screen.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  img: {
    width:Env.osWidth,
    height:Env.osHeight
  }
})