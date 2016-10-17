import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Evicon from 'react-native-vector-icons/EvilIcons'

export default class SortBar extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.tab}>
          <View style={styles.iconNav}>
            <Icon size={32} name="md-radio" color="#1ff371"/>
          </View>
          <View style={styles.textNav}>
            <Text >私人FM</Text>
          </View>
        </View>
        <View style={styles.tab}>
          <View style={styles.iconNav}>
            <Text style={styles.text}>17</Text>
          </View>
          <View style={styles.textNav}>
            <Text>每日歌曲推荐</Text>
          </View>
        </View>
        <View style={styles.tab}>
          <View style={styles.iconNav}>
            <Evicon size={32} name="chart" color="#1ff371"/>
          </View>
          <View style={styles.textNav}>
            <Text>云音乐新歌榜</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:110,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#cccccc'
  },
  tab:{
    flex:1,
    height:100,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:10
  },
  iconNav: {
    borderRadius:30,
    width:60,
    height:60,
    borderWidth:1,
    borderColor:'#1ff371',
    justifyContent:'center',
    alignItems:'center'
  },
  textNav: {
    flex:1,
    paddingTop:10,
  },
  text: {
    fontSize:23,
    color:'#1ff371'
  }
})