import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'

export default class ListLabel extends Component{

  constructor(){
    super()
  }
  render(){
    const { tip } = this.props
    if(tip){
      return(
        <TouchableHighlight
          underlayColor="#ffffff"
          onPress={this.turnToPage}
          style={styles.touch}>
          <View style={styles.container}>
            <View style={styles.iconNav}><Icon name="ios-phone-portrait" size={32} color="#1ff371"/></View>
            <View style={styles.contentT}>
              <View style={styles.titleNavT}>
                <Text style={styles.titleT}>本地音乐<Text style={styles.numberT}>(1234)</Text></Text>
              </View>
              <View style={styles.tipNavT}><Text style={styles.numberTip}>{tip}</Text></View>
            </View>
          </View>
        </TouchableHighlight>
      )
    }
    return(
      <TouchableHighlight
        underlayColor="#ffffff"
        onPress={this.turnToPage}
        style={styles.touch}>
        <View style={styles.container}>
          <View style={styles.iconNav}><Icon name="ios-phone-portrait" size={32} color="#1ff371"/></View>
          <View style={styles.content}>
            <View style={styles.titleNav}>
              <Text style={styles.title}>本地音乐<Text style={styles.number}>(1234)</Text></Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  @autobind
  turnToPage(){

  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',    
    height:50,
    flexDirection:'row',
  },
  touch: {
    height:50
  },
  iconNav: {
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  content: {
    flex:1,
    borderBottomWidth:1,
    borderColor:'#ecedef',
    flexDirection:'column'
  },
  titleNav: {
    justifyContent:'center',
    flex:1
  },
  number: {
    color:'#cccccc',
    fontSize:13
  },
  contentT:{
    flex:1,
    flexDirection:'column',
    borderBottomWidth:1,
    borderColor:'#ecedef'
  },
  titleNavT:{
    flex:2,
    paddingTop:3,
    justifyContent:'center'
  },
  tipNavT: {
    flex:1,
    justifyContent:'center',
    paddingBottom:3
  },
  numberTip: {
    fontSize:11,
    color:'#cccccc'
  }
})