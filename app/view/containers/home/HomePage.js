import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid  } from 'react-native'
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

  render(){
    return(
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Drawer />}>
          <ScrollableTabView
            renderTabBar={() => <HomeTabBar />}>
            <MusicPage tabLabel="music"/>
            <LocalPage tabLabel="local"/>
            <UserPage tabLabel="user"/>
          </ScrollableTabView>
          <Player />
        </DrawerLayoutAndroid>
    )
  }
}


const styles = StyleSheet.create({
  drawerContainer: {
    flex:1,
    backgroundColor:'red'
  }
})