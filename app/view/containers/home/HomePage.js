import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native'
import { connect } from 'react-redux'

@connect((state) => {
  console.log(state)
  return{
    music: state.music
  }
})

export default class HomePage extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'red'}}><Text>homepage</Text></View>
    )
  }
}