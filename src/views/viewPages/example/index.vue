<template>
  <div>
    <van-grid>
      <van-grid-item
        v-for="item in list"
        :icon="item.icon"
        :text="item.name"
        :key="item.name"
        @click="$router.push(item.router)"
      />
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
export default {
  name: 'example',
  components: {
    'van-grid': Grid,
    'van-grid-item': GridItem
  },
  data() {
    return {
      list: [
        { name: 'tab', router: '/tab', icon: 'other-pay' },
        { name: 'datepicker', router: '/datetimepicker', icon: 'tosend' },
        { name: 'header', router: '/header', icon: 'orders-o' },
        { name: 'lnglat', router: '/lnglat', icon: 'location-o' },
        { name: 'select', router: '/select', icon: 'label-o' },
        { name: 'switch', router: '/switch', icon: 'stop-circle-o' },
        { name: 'area', router: '/area', icon: 'bookmark-o' },
        { name: 'nodata', router: '/nodata', icon: 'close' },
        { name: 'isdev', router: '/isdev', icon: 'warning-o' },
        { name: 'log', router: '/log', icon: 'orders-o' }
      ]
    }
  },
  created() { },
  methods: {

  }
}
</script>

<style lang="scss">
</style>
