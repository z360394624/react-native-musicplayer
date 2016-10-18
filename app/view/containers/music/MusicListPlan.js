import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'
import ListBlock from '../../components/music/ListBlock'



export default class MusicListPlan extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
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
        <ListBlock />
        <ListBlock />
        <ListBlock />
        <ListBlock />
        <ListBlock />
        <ListBlock />
      </View>
    )
  }
  @autobind
  turnToPage(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor:'#f4fafd'
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