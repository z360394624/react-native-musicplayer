/**
 * Created by alvin.liu on 2016/9/14.
 */


import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import autobind from 'autobind-decorator'
import Icon from 'react-native-vector-icons/Ionicons'
import { os, statusBarHeight, pixel } from '../../../constants/Env'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


/**
 * 需要指定title，hasReturnButton(是否有返回按键)，rightButton(右侧按钮)、
 * navigator; 其中rightButton为null、chatDetail或其他字符串，
 * 其他字符串时将显示字符串，chatDetail显示聊天详细按钮
 *
 */
@connect(
  (state) => {
    return {
      navigator: state.navigator,
    }
  },
)
export default class HeaderComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    hasReturnButton: PropTypes.bool.isRequired,
    rightButton: PropTypes.string,
    navigator: PropTypes.object,
    rightButtonHandle: PropTypes.func,
  }

  @autobind
  onReturnButtonPressed () {
    this.props.navigator.pop()
  }

  @autobind
  onRightButtonPressed () {
    const {rightButtonHandle} = this.props
    rightButtonHandle && rightButtonHandle()
  }

  /**
   * 指定stringLen时计算RightButton的长度
   * @param stringLen
   * @returns
   */
  getButtonStyle (stringLen) {
    let buttonWidth = stringLen
      ? 20 * stringLen < 60 ? 60 : 20 * stringLen
      : 60
    return {
      width: buttonWidth,
      justifyContent: 'center',
      alignItems: 'center',
      height: os === 'ios' ? 40 : 48,
    }
  }

  render () {
    const {title, hasReturnButton, rightButton} = this.props

    let rightLayout
    switch (rightButton) {
      case 'null': {
        rightLayout =
          <View style={this.getButtonStyle()}/>
      }
        break
      case 'chatDetail': {
        rightLayout =
          <TouchableHighlight
            key={rightButton}
            activeOpacity={0.7}
            underlayColor="#F8F7F7"
            onPress={this.onRightButtonPressed}
            style={this.getButtonStyle()}>
            <Icon
              name="ios-contact"
              size={30}
              color={'rgb(128, 128, 128)'}
            />
          </TouchableHighlight>
      }
        break
      case 'dialogDetailGroup': {
        rightLayout = 
          <TouchableHighlight
              key={rightButton}
              activeOpacity={0.7}
              underlayColor="#F8F7F7"
              onPress={this.onRightButtonPressed}
              style={this.getButtonStyle()}>
              <Icon
                name="ios-people-outline"
                size={30}
                color={'rgb(128, 128, 128)'}
              />
          </TouchableHighlight>
      }
        break
      case 'dialogDetailCon': {
        rightLayout = 
          <TouchableHighlight
              key={rightButton}
              activeOpacity={0.7}
              underlayColor="#F8F7F7"
              onPress={this.onRightButtonPressed}
              style={this.getButtonStyle()}>
              <Icon
                name="ios-person-outline"
                size={30}
                color={'rgb(128, 128, 128)'}
              />
          </TouchableHighlight>
      }
        break
      case 'startDiscussion': {
        rightLayout =
          <TouchableHighlight
            key={rightButton}
            activeOpacity={0.7}
            underlayColor="#F8F7F7"
            onPress={this.onRightButtonPressed}
            style={this.getButtonStyle()}>
            <Icon
              name="ios-chatbubbles-outline"
              size={30}
              color={'rgb(128, 128, 128)'}
            />
          </TouchableHighlight>
      }
        break
      default: {
        rightLayout =
          <TouchableHighlight
            key={rightButton}
            activeOpacity={0.7}
            underlayColor="#F8F7F7"
            onPress={this.onRightButtonPressed}
            style={this.getButtonStyle(rightButton.length)}>
            <Text style={styles.rightButtonLabel}>{rightButton}</Text>
          </TouchableHighlight>
      }
        break
    }

    return (
      <View style={styles.container}>
        {
          hasReturnButton
            ? <View style={styles.returnLayout}>
                <TouchableHighlight
                  style={this.getButtonStyle()}
                  key="returnButton"
                  activeOpacity={0.7}
                  underlayColor="#F8F7F7"
                  onPress={this.onReturnButtonPressed}>
                  <Icon
                    name="ios-arrow-back"
                    size={30}
                    color={'rgb(128, 128, 128)'}
                    ref="returnIcon"
                  />
                </TouchableHighlight>
                <Text style={styles.titleLeft}>{title}</Text>
              </View>
            : <View style={this.getButtonStyle()}/>
        }
        {
          hasReturnButton
            ? null
            : <Text style={styles.titleCenter}>{title}</Text>
        }
        {rightLayout}

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: os === 'ios' ? statusBarHeight : 0,
    height: os === 'ios' ? 61 : 49,
    borderBottomWidth: 2 * pixel,
    borderColor: '#d5d5d5',
  },
  returnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLeft: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
  titleCenter: {
    fontSize: 16,
    color: 'black'
  },
  rightButtonLabel: {
    color: "#3B5998",
    fontSize: 16,
  },
})





