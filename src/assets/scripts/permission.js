import {
  dev
} from '../../../config_init'
import axios from 'axios'
import cookie from 'js-cookie'

const loginInfo = dev.loginInfo
const {
  host,
  userid,
  password,
  tokenkey
} = loginInfo

if (process.env.NODE_ENV === 'development') {
  axios.post(`${host}/token`, {
    userid,
    password,
    'grant_type': 'password'
  }).then(res => {
    if (res.data.err) {
      console.log(res.data.err)
    } else {
      cookie.set(tokenkey, res.data.access_token)
    }
  })
}