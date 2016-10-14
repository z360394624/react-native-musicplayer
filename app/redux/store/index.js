
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducer';

const logger = store => next => action => {
  if(typeof action === 'function') console.log('dispatching a function');
  else console.log('dispatching', action);
  let result = next(action);
  // console.log('next state', store.getState());
  return result;
}

let middlewares = [
  logger,
  thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);


function configureStore(onComplete: ()=>void){
  const store = autoRehydrate()(createAppStore)(reducers);
  //{log: true}  
  //autoRehydrate()传入参数  {log: true}就可以输出一些日志信息
  let opt = {
    storage: AsyncStorage,
    transform: [],
    //whitelist: ['userStore'],
  };
  persistStore(store, opt, onComplete);
  return store;
}
export const store = configureStore()
let getState = store.getState
let disPatch = store.disPatch
export { getState, disPatch }