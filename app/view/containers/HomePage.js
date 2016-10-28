import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, DrawerLayoutAndroid } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import HomeTabBar from '../components/home/HomeTabBar'
import Drawer from '../components/home/Drawer'
import Env from '../../module/constants/Env'
import MusicPage from './music/MusicPage'
import LocalPage from './local/LocalPage'
import UserPage from './user/UserPage'
import Player from '../components/player/Player'

@connect((state) => {
  return {
    navigator: state.navigator
  }
})
export default class HomePage extends Component{
  constructor(){
    super()

    this.state = {
      showModule: 'music',
      tabs:["music", 'local', 'user'],
      activeTab: 0
    }
  }

  render(){
    const { tabs, activeTab } = this.state
    return(
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Drawer />}>
          <HomeTabBar showDrawer={this.showDrawer} activeTab={activeTab} tabs={tabs} goToPage={(index, module) => {this.goToPage(index, module)}}/>
          {this.renderModule()}
          <Player navigator={this.props.navigator}/>
        </DrawerLayoutAndroid>
    )
  }
  @autobind
  goToPage(index, module){
    this.setState({activeTab: index, showModule: module})
  }
  @autobind
  showDrawer(){
    this.refs.drawer.openDrawer()
  }
  @autobind
  renderModule(){
    const navigator = this.props.navigator
    const showModule = this.state.showModule
    switch (showModule) {
      case 'music':{
        return(<MusicPage navigator={navigator}/>)
      }
        break
      case 'local': {
        return(<LocalPage navigator={navigator}/>)
      }
        break
      case 'user': {
        return(<UserPage navigator={navigator}/>)
      }
    }          
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
})

          // <HomeTabBar showDrawer={this.showDrawer} activeTab={activeTab} tabs={tabs} goToPage={(index, module) => {this.goToPage(index, module)}}/>
          // {this.renderModule()}
          // <Player navigator={this.props.navigator}/>