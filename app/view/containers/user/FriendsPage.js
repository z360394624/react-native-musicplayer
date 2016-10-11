import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'




export default class FriendsPage extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <View style={styles.container}><Text>friens</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    flex:1
  }
})