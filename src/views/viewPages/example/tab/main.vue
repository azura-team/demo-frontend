<template>
  <div>
    <van-tabs v-model="activeName">
      <van-tab
        title="标签 1"
        name="tab1"
      >
        <my-tab1></my-tab1>
      </van-tab>
      <van-tab
        title="标签 2"
        name="tab2"
      >
        <my-tab2></my-tab2>
      </van-tab>
      <van-tab
        title="标签 3"
        name="tab3"
      >
        <my-tab3></my-tab3>
      </van-tab>
      <van-tab
        title="蓝天保卫战"
        name="tab4"
      >
        <my-tab4></my-tab4>
      </van-tab>
      <van-tab
        title="标签 1"
        name="tab5"
      >
        <my-tab1></my-tab1>
      </van-tab>
      <van-tab
        title="标签 2"
        name="tab6"
      >
        <my-tab2></my-tab2>
      </van-tab>
      <van-tab
        title="标签 3"
        name="tab7"
      >
        <my-tab3></my-tab3>
      </van-tab>
      <van-tab
        title="标签 4"
        name="tab8"
      >
        <my-tab4></my-tab4>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'

import tab1 from './tab1.vue'
import tab2 from './tab2.vue'
import tab3 from './tab3.vue'
import tab4 from './tab4.vue'

export default {
  name: 'tab',
  components: {
    'van-tab': Tab,
    'van-tabs': Tabs,
    'my-tab1': tab1,
    'my-tab2': tab2,
    'my-tab3': tab3,
    'my-tab4': tab4
  },
  data () {
    return {
      activeName: ''
    }
  },
  wacth: {
    activeName () {

    }
  },
  created () { },
  methods: {
  }
}
</script>

<style lang="scss">
.van-tabs__line {
  background-color: #ddd;
}
</style>
