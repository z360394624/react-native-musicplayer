import React, { Component } from 'react'
import { Navigator } from 'react-native'
import HomePage from './home/HomePage'
import FriendsPage from './user/FriendsPage'



export default class AppNavigator extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <Navigator
        initialRoute={{}}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        renderScene={this.renderNavigator}>
      </Navigator>
    )
  }
  renderNavigator(route, navigator){
    switch (route.tab) {
      case 'music':{
        return(<View></View>)
      }
        break
      case 'local':{
        return(<View></View>)
      }
        break
      case 'user': {
        return(<View></View>)
      }
        break
      default: {
        return null
      }
    }
    return(<HomePage ...route navigator={navigator}/>)
  }
}