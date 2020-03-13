<template>
  <div class="app-box">
    <navigation>
      <router-view></router-view>
    </navigation>
    <the-loading></the-loading>
    <the-dev></the-dev>
    <the-log></the-log>
  </div>
</template>

<script>
import TheLoading from '@/components/TheLoading'
import TheLog from '@/components/TheLog'
import TheDev from '@/components/TheDev'
export default {
  name: 'app',
  components: {
    'the-log': TheLog,
    'the-dev': TheDev,
    'the-loading': TheLoading
  }
}
</script>

<style lang="scss" scoped>
.app-box {
  height: 100%;
  background: #f8f8f8;
}
</style>
