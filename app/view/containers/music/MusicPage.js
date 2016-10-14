import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import RNFetchBlob from 'react-native-fetch-blob'
import autobind from 'autobind-decorator'


const dirs = RNFetchBlob.fs.dirs

// console.log(dirs)

export default class MusicPage extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.turntoPage}><Text>music</Text></TouchableHighlight>
      </View>
    )
  }
  @autobind
  turntoPage(){
    this.props.navigator.push({
      tab:'plan',
      page:'fileplan'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})