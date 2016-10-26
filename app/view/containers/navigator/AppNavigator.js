/**
 * Created by alvin.liu on 2016/9/13.
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Navigator,
  StyleSheet,
  Text
} from 'react-native'
import autobind from 'autobind-decorator'
import HomePage from '../HomePage'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// 引入各tab导航函数
import { mountNavigator } from '../../../redux/actions/navigator'
import renderMusicPage from './music'
import renderLocalPage from './local'
import renderUserPage from './user'
import renderPlanPage from './plan'
import Env from '../../../module/constants/Env'
import showToast from '../../components/common/Toast'

let BackAndroid = null
if(Env.os !== 'ios'){
  BackAndroid = require('react-native').BackAndroid
}

let tick = Date.now()

@connect(
  (state) => {
    return {
      navigator: state.navigator,
    }
  },
  (dispatch) => {
    return bindActionCreators({
      mountNavigator: mountNavigator
    }, dispatch)
  }
)
export default class AppNavigator extends Component {
  static propTypes = {
    mountNavigator: PropTypes.func,
  }



  // // 硬件返回按钮事件监听
  componentDidMount () {
    if(Env.os !== 'ios'){
      BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton)
    }
  }

  componentWillUnmount () {
    if(Env.os !== 'ios'){
      BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton)
    }
  }

  @autobind
  handleBackButton () {
    // 处理navigator的导航
    const {navigator} = this.refs
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true
    }
    //这边可以加上二次返回提醒
    // 最终返回系统菜单
    let nowTime = Date.now()
    if(nowTime - tick <= 1500){
      return false
    }else{
      tick = nowTime
      showToast("再次点击将推出应用")
      return true
    }
  }

  render () {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    )
  }

  @autobind
  renderScene (route, navigator) {
    // 挂载navigator
    this.props.navigator || this.props.mountNavigator(navigator)

    // 在此处进行的ref需要使用Callback Attribute形式，
    // 使用string形式将不会挂载在this.ref中
    if (route.tab) {
      switch (route.tab) {
        case 'music' : {
          return renderMusicPage(route, navigator, this.props)
        }
          break
        case 'local': {
          return renderLocalPage(route, navigator, this.props)
        }
          break
        case 'user': {
          return renderUserPage(route, navigator, this.props)
        }
          break
        case 'plan': {
          return renderPlanPage(route, navigator, this.props)
        }
      }
    }
    return (
      <View style={styles.container}>
        <HomePage />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})