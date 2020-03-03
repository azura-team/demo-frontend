import service from '../assets/scripts/customAxios'
let api = {}

import task from './task'

//请求接口集合
const interfaces = {
  task
}

for (let key in interfaces) {
  interfaces[key].forEach(method => {
    if (!api[key]) {
      api[key] = {}
    }
    api[key][method.fun] = payload => {
      if (method.type === 'post') {
        return service[method.serviceName][method.type](method.interface, payload)
      } else {
        return service[method.serviceName][method.type](method.interface, {
          params: payload
        })
      }
    }
  })
}

export default api