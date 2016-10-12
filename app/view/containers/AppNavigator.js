import React, { Component } from 'react'
import { Navigator, View } from 'react-native'
import HomePage from './home/HomePage'
import FriendsPage from './user/FriendsPage'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/index';
import autobind from 'autobind-decorator'

export default class AppNavigator extends Component{
  constructor(){
    super()
    this.state = {
      store: store
    }
  }
  componentDidMount() {
    global.AppNavigator = this.refs.navigator   
  }
  render(){
    return(
      <Provider store={this.state.store}>
          <Navigator
            ref="navigator"
            initialRoute={{}}
            configureScene={() => Navigator.SceneConfigs.FloatFromRight}
            renderScene={this.renderNavigator}>
          </Navigator>
      </Provider>
    )
  }
  renderNavigator(route, navigator){
    if(route.tab){
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
    }
    return(<HomePage {...route} navigator={navigator}/>)
  }
}