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

let routers = []
if (process.env.NODE_ENV === 'development') {
  routers = [
    ...routers,
    // example router
    {
      path: '/example',
      name: 'example',
      component: () => import('@/views/viewPages/example/index.vue')
    },
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
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('@/views/viewPages/example/header.vue')
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('@/views/viewPages/example/switch.vue')
    },
    {
      path: '/datetimepicker',
      name: 'datetimepicker',
      component: () => import('@/views/viewPages/example/datetimepicker.vue')
    }
  ]
}

routers = [
  ...routers,
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/viewPages/modules/home.vue')
  }
]

export default new Router({
  base: `${process.env.BASE_URL}/viewPages`,
  routes: routers
})