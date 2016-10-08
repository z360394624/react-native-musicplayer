import React, { Component } from 'react'
import { View, Text } from 'react-native'

import autobind from 'autobind-decorator'

import WelcomePage from './WelcomePage'

export default class RNMusicPlayer extends Component {
  constructor(){
    super()

    this.state = {
      showPage: 'welcome'  //默认进入欢迎页面
    }
  }

  render(){
    switch (this.state.showPage) {
      case 'welcome': {
        return(<WelcomePage />)
      }
      default: 
        return(<View><Text>home</Text></View>)
    }
  }
  @autobind
  auto(){

  }
}