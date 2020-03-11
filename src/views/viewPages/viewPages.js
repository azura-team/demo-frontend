// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/views/viewPages/viewPages.vue'
import router from '@/router/viewPages'
import store from '@/store/viewPages'

// 全局组件
import HeaderBarx from '@/components/HeaderBarx.vue'
import Switchx from '@/components/Switchx.vue'
import Select from '@/components/Select.vue'
import Area from '@/components/Area.vue'
import LngLat from '@/components/LngLat.vue'
import DatePicker from '@/components/DatePicker.vue'
Vue.component('MyHeader', HeaderBarx)
Vue.component('MySwitch', Switchx)
Vue.component('MySelect', Select)
Vue.component('MyArea', Area)
Vue.component('MyLngLat', LngLat)
Vue.component('MyDatetimePicker', DatePicker)


// 模拟注册，自动添加cookie（钉钉项目里此文件作用是获取钉钉手机号码并存储）
import '@/assets/scripts/permission'

//移动端自适应
import '@/assets/scss/base.scss'

// vant css
import 'vant/lib/index.css'

//icon
import icon from '@/components/aepIcon.vue'
Vue.component('icon', icon)
import '@/assets/icons/back'
import '@/assets/icons/right'
import '@/assets/icons/down'
import '@/assets/icons/location'
import '@/assets/icons/search'
import '@/assets/icons/downWhite'
import '@/assets/icons/close'
import '@/assets/icons/outStand'
import '@/assets/icons/rightb'

// 全局方法，会自动加上$
import global from '@/assets/scripts/global'
for (let key in global) {
  Vue.prototype[`$${key}`] = global[key]
}

// 虚拟滚动（只有在可视区域才会挂载数据，防止列表过长导致卡顿）
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.use(VueVirtualScroller)

// 返回缓存
import Navigation from 'vue-navigation'
Vue.use(Navigation, {
  router,
  store
})

//左右滑动
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {
  name: 'v-touch'
})

{
  const url = 'https://webapi.amap.com/maps?v=1.4.15&key=84af24a85c0ce6dbaa1dfca048fda1ae'
  const jsapi = document.createElement('script')
  jsapi.charset = 'utf-8'
  jsapi.src = url
  document.head.appendChild(jsapi)
}

//leaflet地图
import 'leaflet'
import 'leaflet.chinatmsproviders'
import 'leaflet/dist/leaflet.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
  store
})