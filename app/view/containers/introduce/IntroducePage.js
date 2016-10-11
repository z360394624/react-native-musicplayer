/*
  关于启动后的功能更新介绍页面
  @PDD
*/
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableHighlight, CameraRoll } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import autobind from 'autobind-decorator'
import Icon from 'react-native-vector-icons/FontAwesome'
import Env from '../../../module/constant/Env'
import DataRepository from '../../../module/dao/api'
import uuid from 'node-uuid'
import IntroTabBar from '../../components/introduce/IntroTabBar'
import Button from 'apsl-react-native-button'

CameraRoll.saveToCameraRoll('http://10.60.17.66:3000/welcome/welcomeSky.jpg')
.then((data) => {
  console.log(data)  
})
.catch((error) => {
  console.log(error)
})
const api = new DataRepository()

export default class WelcomePage extends Component{
  constructor(){
    super()
  }
  render(){
    const introList = this.props.introList
    return(
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <ScrollableTabView
          tabBarPosition="bottom"
          style={styles.scrollview}
          renderTabBar={this.renderIntroBar}>
          {
            introList.map((tab, tabIndex) => {
              let isActive = tabIndex+1
              return(
                <View style={styles.tab} tabLabel={tab.tabName} key={uuid()}>
                  <View style={styles.textNav}>
                    <View styles={styles.textBox}>
                      <Text>{tab.content}</Text>
                    </View>
                  </View>
                  {
                    isActive == introList.length && (
                      <View style={styles.buttonNav}>
                        <TouchableHighlight 
                          style={styles.buttonBox}
                          underlayColor="#c6baba"
                          onPress={this.turnToHomePage}>
                          <Text style={styles.buttonText}>开始体验</Text>
                        </TouchableHighlight>
                      </View>
                    )
                  }
                  <Image style={styles.img}source={{uri: tab.imgUrl}}/>
                </View>
              )
            })
          }
        </ScrollableTabView>
      </View>
    )
  }
  @autobind
  renderIntroBar(){
    return(<IntroTabBar />)
  }
  @autobind
  turnToHomePage(){
    this.props.changeState('homepage')
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  tab:{
    flex:1
  },
  img:{
    width: Env.osWidth,
    height: Env.osHeight
  },
  scrollview:{
  },
  textNav:{
    position:'absolute',
    width:Env.osWidth,
    height:30,
    top:200,
    left:0,
    justifyContent:'center',
    alignItems:'center',
    zIndex:10
  },
  buttonNav: {
    position:'absolute',
    width:Env.osWidth,
    height:30,
    bottom:100,
    left:0,
    justifyContent:'center',
    alignItems:'center',
    zIndex:10
  },
  buttonBox:{
    width:100,
    height:30,
    backgroundColor:'red',
    borderRadius:15,
    borderWidth:2,
    borderColor:'#e55540',
    backgroundColor:'#e3dfdf',
    opacity:0.8,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    color:'#e55540'
  }
})