import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Evicon from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import Env from '../../../module/constant/Env'
import autobind from 'autobind-decorator'
import Avatar from '../Avatar'


paddingLeft = Env.osWidth/2 - 120 


export default class Player extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.avatarNav}>
            <Image style={styles.img} source={require('../../../src/img/avatar.png')}/>
          </View>
          <View style={styles.detailNav}>
            <View style={styles.textSongname}><Text numberOfLines={1} style={styles.songname}>再爱一次</Text></View>
            <View style={styles.textSonername}><Text numberOfLines={1} style={styles.songerName}>周杰伦</Text></View>
          </View>
        </View>
        <View style={styles.right}>
          <View style={[styles.icontab, styles.firstIconTouc]}>
            <TouchableHighlight
              style={styles.iconTouch}
              underlayColor="#a0bfad"
              onPress={() => {this.onPressPlay('list')}}
              >
              <Icon name="md-menu" size={25} color="#1ff371"/>
            </TouchableHighlight>
          </View>
          <View style={styles.icontab}>
            <TouchableHighlight
              style={styles.iconTouch}
              underlayColor="#a0bfad"
              onPress={() => {this.onPressPlay('play')}}
              >
              <Evicon name="play" size={40} color="#1ff371"/>
            </TouchableHighlight>
          </View>
          <View style={styles.icontab}>
            <TouchableHighlight
              style={styles.iconTouch}
              underlayColor="#a0bfad"
              onPress={() => {this.onPressPlay('next')}}
              >
              <Icon name="md-arrow-forward" size={28} color="#1ff371"/>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
  @autobind
  onPressPlay(name){

  }
}

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    borderTopWidth:1,
    borderColor:'#e3e5e5'
  },
  left: {
    flex:1,
    flexDirection:'row'
  },
  right: {
    flex:1,
    flexDirection:'row',
  },
  icontab:{
    width:40,
    height:50,
  },
  iconTouch: {
    width:40,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  firstIconTouc: {
    marginLeft: paddingLeft > 0 ? paddingLeft : 0
  },
  avatarNav: {
    width:60,
    height:50,
    alignItems:'center',
    justifyContent:'center'       
  },
  detailNav: {
    flex:1,
    flexDirection:'column'
  },
  img: {
    width:50,
    height:40
  },
  textSongname: {
    flex:3,
    justifyContent:'center',
    paddingLeft:5,
    paddingRight:5
  },
  textSonername: {
    flex:2,
    justifyContent:'center',
    paddingLeft:5,
    paddingRight:5,
    paddingBottom:3
  },
  songName: {
    color:'#636465',
    fontSize:23,
  },
  songerName: {
    color:'#acaeaf',
    fontSize:11
  }
})