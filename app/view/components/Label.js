import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, Switch  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default class Label extends Component{
  static propTypes={
    height: PropTypes.number.isRequired,
    iconSize: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    showArrow: PropTypes.bool.isRequired,
    showTip: PropTypes.bool.isRequired,
    labelName:PropTypes.string.isRequired,
    tipText: PropTypes.number,
    showSwitch: PropTypes.bool
  }
  constructor(){
    super()
  }
  render(){
    const { height, iconName, iconSize, labelName, showTip, tipText, showArrow, showSwitch } = this.props
    return(
      <TouchableHighlight
        underlayColor="#e3e5e5"
        activeOpacity={1}
        onPress={() => {}}>
        <View style={[styles.container, {height: height}]}>
          <View style={[styles.iconNav, {width: iconSize+10}]}>
            <Icon name={iconName} size={iconSize} color="#34ec87"></Icon>
          </View>
          <View style={styles.labelContent}><Text style={styles.labelName}>{labelName}</Text></View>
          { 
            showTip && (<View style={styles.textNav}><Text>{tipText}</Text></View>)
          }
          {
            showArrow && (<View style={[styles.iconNav, {width: 30}]}><Icon size={iconSize} name="ios-arrow-forward" color="#000"></Icon></View>)
          }
          {
            showSwitch && (<View style={[styles.iconNav, {width: 40}]}><Switch onValueChange={() => {}} value={true}></Switch></View>)
          }
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'center',
  },
  iconNav: {
    alignItems:'center',
    justifyContent: 'center'
  },
  labelContent:{
    flex:1,
    justifyContent:'center',
    paddingLeft:5
  },
  labelName:{

  },
  textNav:{
    width:30,
    justifyContent:'center'
  },
  switchNav:{

  }
})