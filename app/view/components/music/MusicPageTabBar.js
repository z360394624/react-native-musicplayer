import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'

export default class MusicPageTabBar extends Component{

  constructor(){
    super()
  }
  render(){
    const { tabs, activeTab, goToPage } = this.props
    return(
      <View style={styles.container}>
        {
          tabs.map((tab, tabIndex) => {
            let tabName = ''
            switch (tab) {
              case 'suggest': {
                tabName = '个性推荐'
              }
                break
              case 'list': {
                tabName = '歌单'
              }
                break
              case 'fm': {
                tabName = '明星电台'
              }
                break
              case 'rank': {
                tabName = "排行榜"
              }
            }

            return(
              <TouchableHighlight
                onPress={() => {this.goToPage(tabIndex)}}
                underlayColor="#ffffff"
                style={[styles.touch, {borderColor: activeTab == tabIndex ? '#1ff371' : '#ffffff'}]}
                key={tab}><Text style={[styles.tabText, {color: activeTab == tabIndex ? '#1ff371' : '#636465'}]}>{tabName}</Text></TouchableHighlight>
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