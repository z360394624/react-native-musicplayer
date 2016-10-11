import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid  } from 'react-native'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import Drawer from '../../components/home/Drawer'




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
          <Text>xx</Text>
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