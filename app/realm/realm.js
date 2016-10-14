'use strict'


import Realm from 'realm'


const CarSchema = {
  name: 'Car',
  primaryKey: 'id',
  properties: {
    id: 'int',
    car_type: 'string',
    car_name: 'string',
    driver_name: 'string',
    phone: {type: 'string', default: '10086'}
  }
}

export default new Realm({schema: [CarSchema]})


