import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WaitFlower from '../../components/common/WaitFlower'


//这个是中间过渡page  实际上可以省略这个需求  但是也可以在碰到载入app开始时需要进行的广告部分页面


export default class Main extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <WaitFlower />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})