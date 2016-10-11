import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Avatar from '../Avatar'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Drawer extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.Avatar} source={require('../../../src/img/drawer.jpg')}>
          <Avatar width={60} height={60}/>
          <View style={styles.nameNav}>
            <View><Text style={styles.name}>青铜组的王者选手</Text></View>
          </View>
          <View style={styles.rote}>
            <TouchableHighlight>
              <View style={styles.roteBlock}>
                <View style={styles.roteicon}><Icon name="md-checkmark" size={20} color="#ffffff"></Icon></View>
                <Text style={styles.notetext}>签到</Text>  
              </View>  
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  Avatar:{
    height:120,
    alignItems:'center',
    paddingTop:20,
  },
  nameNav: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:5
  },
  name: {
    fontSize:17,
    color:'#ffffff'
  },
  rote:{
    position:'absolute',
    right:10,
    top:10,
    width:60,
    height:25,
    borderRadius:3,
    backgroundColor:'transparent',
    borderWidth:2,
    borderColor:'#ffffff'
  },
  roteBlock:{
    flex:1,
    flexDirection:'row'
  },
  roteicon:{
    flex:1,
    paddingLeft:5,
    justifyContent:'center'
  },
  notetext:{
    color:'#ffffff',
    fontSize:12,
    flex:2,
    textAlign:'center',
    paddingTop:2
  }
})