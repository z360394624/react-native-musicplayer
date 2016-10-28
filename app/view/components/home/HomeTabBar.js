import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'
import uuid from 'uuid'
import Env from '../../../module/constants/Env'
import { connect } from 'react-redux'
import { checkColor } from '../../../module/api/color'


paddingBar = (Env.osWidth-100-150)/2

@connect((state) => {
  return{
    skin: state.skin
  }
})
export default class HomeTabBar extends Component{

  constructor(){
    super()
  }
  render(){
    const { tabs, activeTab, goToPage } = this.props
    const { red, green, blue } = this.props.skin
    const color = `rgb(${red}, ${green}, ${blue})`
    return(
      <View style={[styles.container, {backgroundColor: color}]}>
        <View style={styles.drawerNav}>
          <TouchableHighlight
            underlayColor={color}
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
                iconName = "ios-musical-notes-outline"
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
                  underlayColor={color}
                  onPress={() => {this.goToPage(tabIndex, tab)}}
                  style={styles.touch}
                >
                  <Icon name={iconName} size={32} color={activeTab == tabIndex ? '#cccccc' : '#ffffff'}/>
                </TouchableHighlight>
              </View>
            )
          })
        }
        </View>
        <View style={styles.searchNav}>
          <TouchableHighlight
            underlayColor={color}
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
  goToPage(tabIndex, module){
    const { goToPage } = this.props
    goToPage(tabIndex, module)
  }
}

const styles = StyleSheet.create({
  container: {
    height:50,
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