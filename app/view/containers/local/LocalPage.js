import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, ScrollView  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ListLabel from '../../components/local/ListLabel'
import ListBlock from '../../components/local/ListBlock'

//这个主要是关于一些歌单处理的页面


export default class LocalPage extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <ScrollView>
        <ListLabel tip="已暂停"/>
        <ListLabel tip="已暂停"/>
        <ListLabel tip="已暂停"/>
        <ListLabel tip="已暂停"/>
        <ListLabel tip="已暂停"/>
        <ListLabel />
        <ListLabel />
        <ListLabel />
        <ListBlock />
        <ListBlock />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:30
  }
})