import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import UserPageTabBar from '../../components/user/UserPageTabBar'
import DymicPlan from './DymicPlan'
import NearByPlan from './NearByPlan'
import FriendsPlan from './FriendsPlan'


export default class UserPage extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <UserPageTabBar />}>
          <DymicPlan tabLabel="dymic"/>
          <NearByPlan tabLabel="nearby" />
          <FriendsPlan tabLabel="friends"/>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})