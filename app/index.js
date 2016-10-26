import 'rxjs'
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'

import SplashScreen from 'react-native-splash-screen'
import configureStore from './redux/store'
import Main from './view/containers/Main'
import WaitPlan from './view/containers/plan/WaitPlan'
export default function appSetup () {
  // setup

  class RNMusicPlayer extends Component{
    constructor(){
      super()

      this.state = {
        showModule: 'welcome',
        store: configureStore(() => {
          setTimeout(() => {
            this.setState({showModule: 'homepage'})
            SplashScreen.hide()   //hide splashpage  隐藏过渡背景页
          }, 1500)
        })
      }
    }
    render(){
      switch (this.state.showModule){
        case 'welcome': {
          return(<WaitPlan />)
        }
          break
        case 'homepage':{
          return(
            <Provider store={this.state.store}>
              <Main />
            </Provider>
          )
        }
      }
    }
  }
  return RNMusicPlayer
}