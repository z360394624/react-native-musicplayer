/**
 * Created by alvin.liu on 2016/10/9.
 */


import { AsyncStorage } from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import createLogger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from '../reducers'
import epics from '../epics'
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
})
const epicMiddleware = createEpicMiddleware(epics)
const thisCreateStore = applyMiddleware(epicMiddleware, logger)(createStore)

export default function configureStore (onComplete) {
  const store = autoRehydrate({log: false})(thisCreateStore)(reducers)
  const persistConfig = {
    storage: AsyncStorage,
    // whitelist: ['currentUser'],  // 开发时保留
    blacklist: [
      'navigation',
      'navigator',
      'currentUser',
      'skin'
    ],
  }
  const persistor = persistStore(store, persistConfig, onComplete)
  if (isDebuggingInChrome) {
    window.store = store
  }
  return store
}