export default {
  state: {
    loading: false
  },
  mutations: {
    set_loading(state, value) {
      console.log(state)
      state.loading = value
    }
  },
  actions: {},
  getters: {}
}