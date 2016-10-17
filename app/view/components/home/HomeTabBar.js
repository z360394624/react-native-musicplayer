import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'
import uuid from 'uuid'
import Env from '../../../module/constant/Env'


paddingBar = (Env.osWidth-100-130)/2

export default class HomeTabBar extends Component{

  constructor(){
    super()
  }
  render(){
    const { tabs, activeTab, goToPage } = this.props
    return(
      <View style={styles.container}>
        <View style={styles.drawerNav}>
          <TouchableHighlight
            underlayColor="#109242"
            style={styles.touch}
            onPress={this.showDrawer}>
            <Icon size={28} name="md-menu" color="#ffffff"/>
          </TouchableHighlight>
        </View>
        <View style={styles.tabNav}>
        {
          tabs.map((tab, tabIndex) => {
            let iconName = ''
            switch (tab) {
              case 'music': {
                iconName = 'ios-musical-notes-outline'
              }
                break
              case 'local': {
                iconName = "ios-locate-outline"
              }
                break
              case 'user': {
                iconName = "ios-person-outline"
              }
            }
            return(
              <View style={[styles.tab]} key={uuid()}>
                <TouchableHighlight
                  underlayColor='#109242'
                  onPress={() => {this.goToPage(tabIndex)}}
                  style={styles.touch}
                >
                  <Icon name={iconName} size={32} color={activeTab == tabIndex ? "#ffffff" : '#a0bfad'}/>
                </TouchableHighlight>
              </View>
            )
          })
        }
        </View>
        <View style={styles.searchNav}>
          <TouchableHighlight
            underlayColor="#109242"
            style={styles.touch}
            onPress={this.showSearchPage}>
            <Icon size={28} name="md-search" color="#ffffff"/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  @autobind
  showDrawer(){
    const { showDrawer } = this.props
    showDrawer()
  }
  @autobind
  showSearchPage(){

  }
  @autobind
  goToPage(tabIndex){
    const { goToPage } = this.props
    goToPage(tabIndex)
  }
}

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:'#1ff371',
    flexDirection:'row'
  },
  drawerNav: {
    width:50,
  },
  tabNav: {
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:paddingBar,
    paddingRight:paddingBar
  },
  searchNav: {
    width: 50,
  },
  touch: {
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  }
})