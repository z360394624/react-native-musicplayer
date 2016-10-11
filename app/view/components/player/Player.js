import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default class Player extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:60,
    backgroundColor:'transparent',
  }
})