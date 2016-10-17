import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Env from '../../../module/constant/Env'
import Swiper from 'react-native-swiper'
import autobind from 'autobind-decorator'




export default class MusicSwipe extends Component{

  constructor(){
    super()
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
    return (
      <View style={{
        position: 'absolute',
        bottom: 10,
        right: 10
      }}>
        <Text style={{ color:'grey' }}>
          <Text style={{
            color: 'white',
            fontSize: 20
          }}>{index + 1}</Text>/{total}
        </Text>
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
  }
})