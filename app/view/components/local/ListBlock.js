import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import autobind from 'autobind-decorator'
import uuid from 'node-uuid'
//这个主要是关于一些歌单处理的页面


export default class ListBlock extends Component{

  constructor(){
    super()


    this.state = {
      show: false,
      data: ["1", "2", "3"]
    }
  }
  render(){
    const { show, data } = this.state
    const self = this
    if(!show){
      iconName="ios-arrow-forward"
    }else{
      iconName="ios-arrow-down"
    }
    const contHeight = show == true ? data.length * 70 +35 : 35
    return(
      <View style={[styles.container, {height: contHeight}]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.showBlock}>
          <View style={styles.titleBar}>
            <View style={styles.iconNav}><Icon name={iconName} color="#ffffff" size={25}/></View>
            <View style={styles.content}><Text>创建的歌单</Text></View>
            <View style={styles.iconNav}><Icon name="md-more" size={25} color="#ffffff"/></View>
          </View>
        </TouchableOpacity>
        {
          this.state.show && 
            this.state.data.map(() => {
              return self.renderBlock()
            })
          
        }
      </View>
    )
  }
  @autobind
  renderBlock(){
    const { data } = this.state
    return(
      <TouchableHighlight
        underlayColor="#ffffff"
        onPress={this.turnToPage}
        key={uuid()}>
        <View style={styles.listNav}>
          <View style={styles.listLeft}>
            <Image style={styles.listImg} sizeMode="stretch" source={require('../../../src/img/suggest1.jpg')}/>
          </View>
          <View style={styles.listContent}>
            <View style={styles.topTitle}><Text numberOfLines={1} style={{fontSize: 17}}>青铜组的王者选手喜欢的歌</Text></View>
            <View style={styles.bottomTip}>
              <View style={styles.bottomTipIcon}>
                <Icon name="ios-checkmark-circle" size={20} color="#1ff371"/>
              </View>
              <View style={styles.bottomTipText}><Text numberOfLines={1} style={{fontSize: 13}}>3首</Text></View>
            </View>
          </View>
          <View style={styles.listRight}>
            <Icon name="md-more" size={32} color="#1ff371"/>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  @autobind
  showBlock() {
    const { show } = this.state
    if(show){
      this.setState({show: false})
    }else{
      this.setState({show: true})
    }
  }
  @autobind
  turnToPage(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  titleBar: {
    height:35,
    flexDirection:'row',
    backgroundColor:'#bdc5c0'
  },
  iconNav: {
    width:40,
    height:35,
    justifyContent:'center',
    alignItems:'center'
  },
  content: {
    flex:1,
    justifyContent:'center'
  },
  listNav: {
    height:70,
    flexDirection:'row'
  },
  listLeft: {
    width:70,
    height:70,
    padding:5
  },
  listContent: {
    flex:1,
    flexDirection:'column',
    borderBottomWidth:1,
    borderColor:'#cccccc'
  },
  listRight: {
    width:60,
    height:70,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#cccccc'
  },
  listImg: {
    width:70,
    height:70
  },
  topTitle: {
    height:40,
    justifyContent:'center',
    paddingLeft:5
  },
  bottomTip: {
    height:30,
    paddingLeft:5,
    flexDirection:'row',
    justifyContent:'center'
  },
  bottomTipIcon: {
    width:30,
    height:30,
    justifyContent:'center'
  },
  bottomTipText:{
    justifyContent:'center', 
    flex:1   
  }
})



