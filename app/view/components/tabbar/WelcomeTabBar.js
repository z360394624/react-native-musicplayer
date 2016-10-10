import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import autobind from 'autobind-decorator'
import Icon from 'react-native-vector-icons/FontAwesome'
import Env from '../../../module/constant/Env'
export default class WelcomeTabBar extends Component{
  static propTypes = {
    tabs: PropTypes.array,
    goToPage: PropTypes.func,
    activeTab: PropTypes.number
  }
  constructor(){
    super()

  }
  render(){
    const { tabs } = this.props
    console.log(this.props)
    return(
      <View style={[this.props.style, styles.container]}>
        <View style={styles.tabBox}>
          {
            tabs.map((tab, tabIndex) => {
              return(
                <View key={tabIndex} style={styles.tabBlock}>
                  <View style={styles.circel}></View>
                </View>
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
    height: 80,
    width: Env.osWidth,
    justifyContent:'center',
    alignItems:'center',
    opacity:0
  },
  tabBox:{
    flexDirection:'row',
  },
  tabBlock:{
    width:40,
    height:30,
    justifyContent:'center',
    alignItems:'center'
  },
  circel:{
    width:16,
    height:16,
    borderRadius:8,
  }
})