import Rx from 'rxjs'
import { serverURL } from '../constants/Env'

export function get (url) {
  const options = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }
  return Rx.Observable.fromPromise(
    fetch(`${serverURL}/${url}`, options)
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => {
        throw error
      })
  )
}

export function post (url, body) {
  // console.log(`${serverURL}/${url}`)
  const option = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : ''
  }
  return Rx.Observable.fromPromise(
    fetch(`${serverURL}/${url}`, option)
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => {
        throw error
      })
  )
}

