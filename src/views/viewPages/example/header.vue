<template>
  <div class="main">
    <my-header
      title="标题标题"
      :is-show-search-icon="true"
      :show-border="true"
    >
      <van-button
        type="default"
        icon="location-o"
      ></van-button>
    </my-header>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'mm-header',
  components: {
    'van-button': Button
  },
  data() {
    return {

    }
  },
  created() { },
  methods: {

  }
}
</script>

<style lang="scss">
.main {
  height: 20rem;
  background: #fff;
}
</style>
