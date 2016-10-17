/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'


import appSetup from './app/index'

const RNMusicPlayer  = appSetup()

AppRegistry.registerComponent('RNMusicPlayer', () => RNMusicPlayer)
