import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import RNFetchBlob from 'react-native-fetch-blob'
import autobind from 'autobind-decorator'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MusicPageTabBar from '../../components/music/MusicPageTabBar'



// const dirs = RNFetchBlob.fs.dirs

// console.log(dirs)
//个性推荐  歌单  主播电台 排行榜
export default class MusicPage extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <MusicPageTabBar />}>

        </ScrollableTabView>
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