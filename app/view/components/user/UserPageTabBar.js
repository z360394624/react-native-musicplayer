import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'
import uuid from 'node-uuid'


export default class UserPageTabBar extends Component{

  constructor(){
    super()
  }
  render(){
    const { tabs, activeTab, goToPage } = this.props
    console.log(tabs, activeTab)
    return(
     <View style={styles.container}>
        {
          tabs.map((tab, tabIndex) => {
            let tabName = ''
            switch (tab) {
              case 'dymic': {
                tabName = '动态'
              }
                break
              case 'nearby': {
                tabName = '附近'
              }
                break
              case 'friends': {
                tabName = '好友'
              }
                break
            }

            return(
              <TouchableHighlight
                key={uuid()}
                onPress={() => {this.goToPage(tabIndex)}}
                underlayColor="#ffffff"
                style={[styles.touch, {borderColor: activeTab == tabIndex ? '#1ff371' : '#ffffff'}]}
                ><Text style={[styles.tabText, {color: activeTab == tabIndex ? '#1ff371' : '#636465'}]}>{tabName}</Text></TouchableHighlight>
            )
          })
        }
      </View>
    )
  }
  @autobind
  goToPage(tabIndex){
    const { goToPage } = this.props
    goToPage(tabIndex)
  }
}

const styles = StyleSheet.create({
  container: {
    height:40,
    flexDirection:'row',
    backgroundColor:'#ffffff'
  },
  touch: {
    flex:1,
    borderBottomWidth:2,
    borderColor:'#ffffff',
    alignItems:'center',
    justifyContent: 'center'
  },
  tabText: {
    alignItems:'center',
    justifyContent: 'center',
    color:'#636465',
    fontSize:15
  }
})