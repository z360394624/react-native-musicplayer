import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, ListView, RefreshControl } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'

import { userdymiclist } from '../../../module/mock/userlistdata'


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })

export default class DymicPlan extends Component{
  constructor(){
    super()
    this.state = {
      dataSource: ds.cloneWithRows(userdymiclist),
      isRefreshing: false
    }
  }
  render(){
    return(
      <View style={styles.container}>
        {
          this.state.dataSource && (
            <ListView
              refreshControl={
                <RefreshControl 
                  refreshing={this.state.isRefreshing}
                  onRefresh={this.onRefresh}
                  tintColor="#ff0000"
                  title="Loading..."
                  titleColor="#00ff00"
                  colors={['#1ff371']}
                  progressBackgroundColor="#ffffff"
                  />
              }
              dataSource={this.state.dataSource}
              renderHeader={this.renderHeader}
              renderRow={this.renderListViewRow}
            ></ListView>
          )
        }
      </View>
    )
  }
  @autobind
  renderHeader(){
    return(
      <View style={styles.headerContainer}>
        <View style={styles.titleBar}>
          <View style={[styles.textNav, {justifyContent: 'center'}]}>
            <Text style={styles.title}>  全部歌单</Text>
          </View>
          <View style={[styles.textNav, styles.showMore]}>
            <TouchableHighlight
              underlayColor="#ffffff"
              onPress={this.turnToPage}>
              <View style={styles.more}>
                <Icon name="md-apps" color="#767983" size={25}/>
                <Text style={styles.moreText}>全部分类</Text>
              </View>
            </TouchableHighlight>  
          </View>
        </View>
        <TouchableHighlight
          underlayColor="#ffffff"
          onPress={this.turnToPage}>
          <View style={styles.fineList}>
            <View style={styles.fineLeft}>
              <Image style={styles.fineImg}sizeMode="stretch" source={require('../../../src/img/finelist.jpg')}/>
            </View>
            <View style={styles.fineContent}><Text>精品歌单,尽在于此</Text></View>
            <View style={styles.fineRight}><Icon name="md-arrow-forward" color="#767983" size={32}/></View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
  @autobind
  renderListViewRow(){
    return <View />
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor:'#f4fafd'
  },
   headerContainer: {
    height:110,
  },
  titleBar: {
    flexDirection:'row',
    height:30,
    marginBottom:20
  },
  textNav: {
    flex:1
  },
  showMore: {
    alignItems:'flex-end'
  },
  title: {
    fontSize:17,
    borderLeftWidth:3,
    borderColor:'#1ff371',
  },
  more: {
    width:80,
    height:30,
    borderWidth:1,
    borderColor:'#cccccc',
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:5
  },
  moreText: {
    color:'#767983',
    fontSize:11,
    paddingLeft:2
  },
  fineList:{
    height:60,
    padding:5,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#cccccc',
    backgroundColor:'#ffffff'
  },
  fineLeft:{
    width:50,
    height:50,
  },
  fineImg:{
    width:50,
    height:50
  },
  fineContent: {
    flex:1,
    height:50,
    justifyContent:'center',
    paddingLeft:10
  },
  fineRight: {
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
  }
})