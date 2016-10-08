import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ScrollableTabView, { DefaultTabBar} from 'react-native-scrollable-tab-view'
import autobind from 'autobind-decorator'

export default class WelcomePage extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={this.renderWelcomeTabBar()}>
          <View tabLabel="1" style={{flex:1}}>
            <Image style={{flex:1}} source={require('../../src/welcome/1.jpg')}/>
          </View>
          <View tabLabel="2" style={{flex:1}}>
            <Image style={{flex:1}} source={require('../../src/welcome/1.jpg')}/>
          </View>
          <View tabLabel="3" style={{flex:1}}>
            <Image style={{flex:1}} source={require('../../src/welcome/1.jpg')}/>
          </View>
        </ScrollableTabView>
      </View>
    )
  }
  @autobind
  renderWelcomeTabBar(){
    return(
      <View style={[styles.tabs]}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  tabs: {
    height:40,
    
  }
})