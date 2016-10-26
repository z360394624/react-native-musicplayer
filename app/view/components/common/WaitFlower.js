import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'





export default class WaitFlower extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}><EvilIcons size={50} color="#68ca91" name="spinner-2" /></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})