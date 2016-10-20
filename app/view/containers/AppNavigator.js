import React, { Component } from 'react'
import { Navigator, View } from 'react-native'
import HomePage from './home/HomePage'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/index';
import autobind from 'autobind-decorator'
import FilePlanPage from './plan/FilePlanPage'



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
            renderScene={this.renderNavigator}>
          </Navigator>
      </Provider>
    )
  }
  @autobind
  renderToMusic(route, navigator){
    // switch (route.page) {
    //   case ''
    // }
  }
  @autobind
  renderToPlan(route, navigator){
    switch (route.page) {
      case 'fileplan': {
        return (<FilePlanPage {...route} navigator={navigator}/>)
      }
    }
  }
  @autobind
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
        case 'plan': {
          return this.renderToPlan(route, navigator)
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