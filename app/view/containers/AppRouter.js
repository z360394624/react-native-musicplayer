import React, { Component } from 'react'
import { createMemoryHistory, Router, IndexRoute, Route } from 'react-router'
import { createNavigatorRouter } from 'react-native-navigator-router'
import HomePage from './home/HomePage'
import FriendsPage from './user/FriendsPage'

export default class AppRouter extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <Router history={createMemoryHistory('/')}>
        <Route path='/' component={createNavigatorRouter()}>
          <IndexRoute component={HomePage} />
          <Route path="/user">
            <Route path="/friends" component={FriendsPage}/>
          </Route>
        </Route>
      </Router>
    )
  }
}