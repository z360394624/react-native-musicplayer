import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid, AsyncStorage  } from 'react-native'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import Drawer from '../../components/home/Drawer'
import HomeTabBar from '../../components/home/HomeTabBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MusicPage from '../music/MusicPage'
import LocalPage from '../local/LocalPage'
import UserPage from '../user/UserPage'
import Player from '../../components/player/Player'





@connect((state) => {
  return{
    music: state.music
  }
})
export default class HomePage extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    setTimeout(() => {
    //   AsyncStorage.getItem('xxx')
    // .then((data) => {
    //   console.log(data)
    // })
    AsyncStorage.getAllKeys()
    .then((data) => {
      console.log(data)
    })
    }, 5000)

  }
  render(){
    return(
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Drawer />}>
          <ScrollableTabView
            renderTabBar={() => <HomeTabBar showDrawer={this.showDrawer}/>}>
            <MusicPage tabLabel="music" navigator={this.props.navigator}/>
            <LocalPage tabLabel="local"/>
            <UserPage tabLabel="user"/>
          </ScrollableTabView>
          <Player />
        </DrawerLayoutAndroid>
    )
  }
  @autobind
  showDrawer(){
    this.refs.drawer.openDrawer()
  }
}


const styles = StyleSheet.create({
  drawerContainer: {
    flex:1,
  }
})