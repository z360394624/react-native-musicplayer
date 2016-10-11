import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView  } from 'react-native'
import Avatar from '../Avatar'
import Icon from 'react-native-vector-icons/Ionicons'
import Label from '../Label'


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
        <ScrollView>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
          <Label height={50} tipText={11} labelName={"ceshiceshi"} iconSize={25} iconName="ios-chatboxes-outline" showTip={true} showArrow={true}/>
        </ScrollView>
        <View style={styles.operaBar}>
          <View style={[styles.operaButton,styles.leftButton]}><Text>设置</Text></View>
          <View style={{width:1,backgroundColor:'#e3e5e5'}}></View>
          <View style={styles.operaButton}><Text>退出</Text></View>
        </View>
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
  },
  operaBar:{
    height:50,
    backgroundColor:'#ffffff',
    flexDirection:'row'
  },
  operaButton:{
    flex:1,
    borderTopWidth:1,
    borderColor:'#e3e5e5',
    justifyContent:'center',
    alignItems:'center'
  },
  leftButton:{
    borderLeftWidth:1,
    borderColor:'#e3e5e5',
  }
})