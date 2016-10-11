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
      <View><TouchableHighlight
       onPress={() => this.context.router.push('/user/friends')}><Text>press</Text></TouchableHighlight></View>
    )
  }
}