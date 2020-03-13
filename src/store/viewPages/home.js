import moment from 'moment'
/* eslint-disable camelcase */
export default {
  state: {
    // loading
    loading: false,
    // 开发弹窗
    showDev: false,
    // 调试窗口
    showLog: false,
    // 调试信息
    listLog: []
  },
  mutations: {
    // 设置loading状态
    set_loading(state, value) {
      state.loading = value
    },
    // 设置开发中弹窗状态
    set_show_dev(state, value) {
      state.showDev = value
    },
    // 弹出开发中弹窗
    show_dev(state) {
      state.showDev = true
    },
    // 设置调试窗口状态
    set_show_log(state, value) {
      state.showLog = value
    },
    add_log(state, value) {
      if (String(value) === '[object Object]') {
        value = JSON.stringify(value)
      }
      value = `${moment().format('HH:mm:ss')} ${value}`
      state.listLog.push(value)
    }
  },
  actions: {},
  getters: {}
}