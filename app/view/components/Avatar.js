import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'

export default class Drawer extends Component{
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }
  constructor(){
    super()
  }

  render(){
    const { width, height } = this.props
    return(
      <View style={{width: width, height: height, borderRadius: width/2, padding:2, backgroundColor:'#ffffff'}}>
        <Image style={{width: width-4, height: height-4, borderRadius: (width-4)/2}} source={require('../../src/img/avatar.png')}/>
      </View>
    )
  }
}
