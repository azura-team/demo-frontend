import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  base: `${process.env.BASE_URL}/viewPages`,
  routes: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/viewPages/modules/home.vue')
    },
    // example router
    {
      path: '/tab',
      name: 'tab',
      component: () => import('@/views/viewPages/example/tab/main.vue')
    },
    {
      path: '/area',
      name: 'area',
      component: () => import('@/views/viewPages/example/area.vue')
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('@/views/viewPages/example/select.vue')
    },
    {
      path: '/lnglat',
      name: 'lnglat',
      component: () => import('@/views/viewPages/example/lnglat.vue')
    }
  ]
})