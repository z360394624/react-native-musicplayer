//个性推荐
import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MusicSwipe from '../../components/music/MusicSwipe'
import Swiper from 'react-native-swiper'
import Env from '../../../module/constant/Env'

export default class SuggestPlan extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <MusicSwipe />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  wrapper: {
    height:100,
  },
  img: {
    height:100,
    width:Env.osWidth
  }
})