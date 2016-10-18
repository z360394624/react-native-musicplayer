//个性推荐
import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MusicSwipe from '../../components/music/MusicSwipe'
import SortBar from '../../components/music/SortBar'
import SortBlock from '../../components/music/SortBlock'
import Swiper from 'react-native-swiper'
import Env from '../../../module/constant/Env'
import autobind from 'autobind-decorator'


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
        <SortBar />
        <SortBlock />
        <SortBlock />
        <SortBlock />
        <SortBlock />
        <SortBlock />
        <View style={styles.buttonNav}>
          <TouchableHighlight
            style={styles.buttonTou}
            onPress={this.turnToPage}
            underlayColor="#ffffff">
              <View style={styles.button}>
                <Text style={styles.text}>点击调整栏目</Text>
              </View>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
  @autobind
  turnToPage(){

  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  wrapper: {
    height:100,
  },
  buttonNav: {
    paddingTop:40,
    justifyContent: 'center',
    alignItems:'center',
    paddingBottom:30
  },
  button: {
    width:100,
    height:35,
    borderRadius:8,
    borderWidth:1,
    borderColor:'#1ff371',
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    color:'#1ff371'
  }
})