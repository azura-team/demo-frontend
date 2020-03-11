<template>
  <div>
    <navigation>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </navigation>
    <van-loading
      v-if="loading"
      class="loading"
      color="#1989fa"
      size="1rem"
    />
  </div>
</template>

<script>
import { Loading, Dialog } from 'vant'
export default {
  name: 'app',
  components: {
    'van-loading': Loading
  },
  data () {
    return {
      transitionName: 'fade',
      timer: null
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  watch: {
    loading () {
      clearTimeout(this.timer)
      if (this.loading) {
        this.timer = setTimeout(() => {
          this.$store.commit('set_loading', false)
          Dialog.alert({
            message: '获取内容失败！'
          }).then(() => {
            // on close
          })
        }, 20 * 1000)
      }
    }
  }
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999;
  width: 1rem;
  height: 1rem;
}
</style>
