import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Env from '../../../module/constant/Env'
import Swiper from 'react-native-swiper'
import autobind from 'autobind-decorator'
import uuid from 'node-uuid'

pageWidth = 7 * 14
leftPosi = (Env.osWidth-pageWidth)/2

export default class MusicSwipe extends Component{

  constructor(){
    super()
    this.state = {
      swiper: [
        '../../../src/img/slide1.jpg',
        '../../../src/img/slide2.jpg',
        '../../../src/img/slide3.jpg',
        '../../../src/img/slide4.jpg',
        '../../../src/img/slide5.jpg',
        '../../../src/img/slide6.jpg',
        '../../../src/img/slide7.jpg',
      ]
    }
  }
  render(){
    return(
      <Swiper style={styles.wrapper} loop={true} autoplay={true} showsPagination={true} renderPagination={this.renderPagination}>
        <View style={styles.silderNav}><Image style={styles.img} source={require('../../../src/img/slide1.jpg')}/></View>
        <View style={styles.silderNav}><Image style={styles.img} source={require('../../../src/img/slide2.jpg')}/></View>
        <View style={styles.silderNav}><Image style={styles.img} source={require('../../../src/img/slide3.jpg')}/></View>
        <View style={styles.silderNav}><Image style={styles.img} source={require('../../../src/img/slide4.jpg')}/></View>
        <View style={styles.silderNav}><Image style={styles.img} source={require('../../../src/img/slide5.jpg')}/></View>
        <View style={styles.silderNav}><Image style={styles.img} source={require('../../../src/img/slide6.jpg')}/></View>
        <View style={styles.silderNav}><Image style={styles.img} source={require('../../../src/img/slide7.jpg')}/></View>
      </Swiper>
    )
  }


  @autobind
  renderPagination(index, total, context){
    const { swiper } = this.state
    return (
      <View style={styles.pageBar}>
        {
          swiper.map((item, ind) => {
            if(ind == index){
              return(
                <View style={styles.activeItem} key={uuid()}/>
              )
            }
            return(
              <View style={styles.item} key={uuid()}/>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    height:100,
    width:Env.osWidth
  },
  silderNav: {
    flex:1,
  },
  img: {
    height:100,
    width: Env.osWidth
  },
  pageBar: {
    flexDirection: 'row',
    position:'absolute',
    top:80,
    left:leftPosi,
    width:pageWidth
  },
  item: {
    backgroundColor:'#ffffff', 
    width: 8, 
    height: 8,
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  },
  activeItem: {
    backgroundColor: '#1ff371', 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  }
})