import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import EvilIcons from 'react-native-vector-icons/EvilIcons'



@connect(
  (state) => {
    return{
      navigator: state.navigator
    }
  }
)
export default class HomePage extends Component{

  static propTypes = {
    tab: PropTypes.string,
    switchTab: PropTypes.func,
  }
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
})