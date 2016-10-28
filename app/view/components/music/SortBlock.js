import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'
import Env from '../../../module/constants/Env'


itemWidth = (Env.osWidth-70)/3

console.log(itemWidth)

export default class SortBlock extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <View style={[styles.textNav, {justifyContent: 'center'}]}>
            <Text style={styles.title}><Icon name="md-calendar" size={20} color="#1ff371"/> 独家放送</Text>
          </View>
          <View style={[styles.textNav, styles.showMore]}>
            <TouchableHighlight
              onPress={this.turnToPage}>
              <Text style={styles.more}>更多</Text>
            </TouchableHighlight>  
          </View>
        </View>
        <View style={styles.rows}>
          <View style={[styles.item]}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest1.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={2}>周杰伦轮子妈周杰伦周杰伦</Text>
          </View>
          <View style={[styles.item, styles.mid]}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest2.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={2}>周杰伦轮子妈周杰伦周杰伦</Text>
          </View>
          <View style={[styles.item]}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest3.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={2}>周杰伦轮子妈周杰伦周杰伦pddpddpddpddpdd</Text>
          </View>
        </View>
        <View style={styles.rows}>
          <View style={[styles.item]}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest1.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={2}>周杰伦轮子妈周杰伦周杰伦</Text>
          </View>
          <View style={[styles.item, styles.mid]}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest2.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={2}>周杰伦轮子妈周杰伦周杰伦</Text>
          </View>
          <View style={[styles.item]}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest3.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={2}>周杰伦轮子妈周杰伦周杰伦pddpddpddpddpdd</Text>
          </View>
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
    padding:20
  },
  titleBar: {
    flexDirection:'row',
    height:30,
  },
  textNav: {
    flex:1
  },
  showMore: {
    alignItems:'flex-end'
  },
  title: {
    fontSize:17,
  },
  more: {
    fontSize:15,
    color:'#1ff371',
    textDecorationLine: 'underline',
    lineHeight:25
  },
  rows: {
    flexDirection:'row',
    height:itemWidth+40,
    paddingTop:10
  },
  item: {
    width: itemWidth,
    height: itemWidth+40,
  },
  mid: {
    marginLeft:15,
    marginRight:15
  },
  imgTouch: {
    width:itemWidth,
    height:itemWidth
  },
  img: {
    width:itemWidth,
    height:itemWidth
  },
  tip:{
    fontSize:13,
    lineHeight:20,
  }
})