import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import autobind from 'autobind-decorator'
import SplashScreen from 'react-native-splash-screen'
import Env from '../../module/constant/Env'
import DataRepository from '../../module/dao/api'
import showToast from '../components/toast/Toast'
import IntroducePage from './introduce/IntroducePage'
import SplashScreenPage from './introduce/SplashScreenPage'
import AppNavigator from './AppNavigator'




const api = new DataRepository()
export default class RNMusicPlayer extends Component {
  constructor(){
    super()

    this.state = {
      showModule: 'homepage',
      introList: []
    }
  }
  componentDidMount(){
    this.fetchData()
    SplashScreen.hide()
  }

  fetchData(){
    // api.fetchIntroduce()
    // .then((data) => {
    //   this.setState({introList: data.data, showModule: 'introPage'})
    // })
    // .catch((error) => {
    //   // showToast('拉取数据失败，请检查网络连接')
    // })
  }
  render(){
    const introList = this.state.introList
    switch (this.state.showModule) {
      case 'introPage': {
        return (<IntroducePage introList={introList} changeState={this.changeState}/>)
      }
        break
      case 'splashScreen': {
        return (<SplashScreenPage />)
      }
        break
      case 'homepage': {
        return(<AppNavigator />)
      }
      default: null
    }
  }
  @autobind
  changeState(module){
    // this.setState({showModule:module})
  }
}

