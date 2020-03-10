import cookie from 'js-cookie'
import api from '@/apis'
import moment from 'moment'

export default {
  // api接口
  api,
  // cookie
  cookie,
  // moment
  moment,
  now: moment().format('YYYY-MM-DD HH:mm:ss'),
  yesterday: moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD 00:00:00'),
  // 生成uuid
  uuid: () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  },
  // 获取url参数对应值
  getUrlParams: name => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const urlObj = window.location
    let r =
      urlObj.href.indexOf('#') > -1 ?
      urlObj.hash.split('?')[1].match(reg) :
      urlObj.search.substr(1).match(reg)
    if (r !== null) {
      return unescape(r[2])
    } else {
      return null
    }
  },
  newObj: data => {
    return JSON.parse(JSON.stringify(data))
  },
  // 数组是否存在并是否为数组
  isArray(arr) {
    return arr && Array.isArray(arr)
  },
  // 获取数组最大最小值
  getMaxMin(arr, key) {
    let min = null,
      max = null
    arr.forEach((item, index) => {
      let value
      if (key) {
        value = Number(item[key])
      } else {
        value = Number(item)
      }
      if (index === 0) {
        max = value
        min = value
      } else if (max < value) {
        max = value
      } else if (min > value) {
        min = value
      }
    })
    return {
      max,
      min
    }
  }
}