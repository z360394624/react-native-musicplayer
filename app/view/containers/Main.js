import React, { Component } from 'react'
import AppNavigator from './navigator/AppNavigator'


//这个是中间过渡page  实际上可以省略这个需求  但是也可以在碰到载入app开始时需要进行的广告部分页面
//中转navigator...感觉浪费资源啊

export default class Main extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    // SplashScreen.hide()
  }
  render(){
    return(<AppNavigator />)
  }
}

