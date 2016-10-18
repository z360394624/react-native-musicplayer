import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'
import Env from '../../../module/constant/Env'


itemWidth = (Env.osWidth-60)/2

//这里没有实现右上角那个听众人数的标识  可以用一张渐变图片  然后包裹文字来实现
//实现了  用了张图片  设置透明度

export default class ListBlock extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.rows}>
          <View style={styles.itemLeft}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest1.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={3}>周杰伦轮子妈周杰伦周杰伦周杰伦轮子妈周杰伦周杰伦周杰伦轮子妈周杰伦周杰伦周杰伦轮子妈周杰伦周杰伦</Text>
            <Image style={styles.tipImg} source={require('../../../src/img/numbertip.jpg')}><Text style={styles.numberText}>11111</Text></Image>
          </View>
          <View style={styles.itemRight}>
            <TouchableHighlight
              style={styles.imgTouch}
              onPress={this.turnToPage}>
              <Image style={styles.img} resizeMode="cover" source={require('../../../src/img/suggest3.jpg')}/>
            </TouchableHighlight>
            <Text style={styles.tip} numberOfLines={3}>周杰伦轮子妈周杰伦周杰伦pddpddpddpddpdd</Text>
            <Image style={styles.tipImg} source={require('../../../src/img/numbertip.jpg')}><Text style={styles.numberText}>11111</Text></Image>
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

  },
  rows: {
    flexDirection:'row',
    height:itemWidth+40,
    paddingTop:20,
  },
  itemLeft:{
    width: itemWidth,
    height:itemWidth + 40,
    marginRight:10,
  },
  itemRight: {
    width: itemWidth,
    height: itemWidth + 40,
    marginLeft:10
  },
  itemMid:{
    width:40,
    height:itemWidth+40
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
  },
  tipImg: {
    position:'absolute',
    right:0,
    top:0,
    justifyContent:'center',
    alignItems:'flex-end',
    paddingRight:5,
    width:60,
    height:20,
    opacity:0.7
  },
  numberText: {
    color:'#ffffff',
    opacity:0.7
  }
})