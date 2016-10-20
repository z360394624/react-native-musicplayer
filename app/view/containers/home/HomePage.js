import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid, AsyncStorage, BackAndroid  } from 'react-native'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import Drawer from '../../components/home/Drawer'
import HomeTabBar from '../../components/home/HomeTabBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MusicPage from '../music/MusicPage'
import LocalPage from '../local/LocalPage'
import UserPage from '../user/UserPage'
import Player from '../../components/player/Player'
// import realm from '../../../realm/realm'
import showToast from '../../components/toast/Toast'
// var _navigator
// var dink = Date.now()

// BackAndroid.addEventListener('hardwareBackPress',() => {
//   if (_navigator && _navigator.getCurrentRoutes().length > 1){
//     _navigator.pop()
//     return true
//   }
//   if (_navigator.getCurrentRoutes().length == 1){
//     const timer = Date.now()
//     if((timer - dink) < 1000){
//       return false
//     }
//     dink = timer    
//     showToast("再按一次退出应用")
//   }
// })

@connect((state) => {
  return{
    music: state.music
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

  componentDidMount(){
    _navigator = this.props.navigator
    // realm.write(() => {
    //   // realm.create('Car', {id: 1, car_type:'QQ', car_name: 'sb001', driver_name:'pdd'})
    //   // realm.create('Car', {id: 2, car_type: '宝马', car_name: 'SB002', driver_name: '李四'});
    //   // realm.create('Car', {id: 3, car_type: '奔驰', car_name: 'SB003', driver_name: '王五'});
    // })

    // let cars = realm.objects('Car')
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
  drawerContainer: {
    flex:1,
  }
})