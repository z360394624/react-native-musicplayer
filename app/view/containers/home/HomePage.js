import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native'




export default class HomePage extends Component{
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(){
    super()
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'red'}}><TouchableHighlight
       onPress={() => this.context.router.push('/friends')}><Text>press</Text></TouchableHighlight></View>
    )
  }
}