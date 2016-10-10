/*

自定义tabbar introduce处使用
*/
import Env from '../../../module/constant/Env'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import uuid from 'node-uuid'

export default class IntroTabBar extends Component{
  constructor(){
    super()
  }

  render(){
    const { tabs, activeTab } = this.props
    return(
      <View style={styles.container}>
        <View style={styles.tabbox}>
          {
            tabs.map((tab, tabIndex) => {
              return(
                <View style={[styles.tab, {backgroundColor: tabIndex == activeTab ? '#c13a36' : '#ffffff', width: tabIndex == activeTab ? 42 : 14}]} key={uuid()}></View>
              )
            })
          }
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    height: 40,
    position:'absolute',
    bottom:40,
    left:0,
    width: Env.osWidth,
  },
  tabbox:{
    alignItems:'center',
    flexDirection:'row'
  },
  tab:{
    width:12,
    height:12,
    borderRadius:6,
    marginLeft:5,
    marginRight:5,
    opacity:0.8
  }
})