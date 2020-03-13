<template>
  <div class="log-box">
    <div
      class="hidden-box"
      @click="setShowLogBox(true)"
    ></div>
    <div
      class="dev-box"
      v-if="showLog"
    >
      <van-icon
        name="cross"
        class="console-close"
        size="0.4rem"
        @click="setShowLogBox(false)"
      />
      <p class="dev-box-title">Logs</p>
      <div class="log-list">
        <p
          v-for="(item,index) in listLog"
          :key="'console' + index"
        >{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'log',
  components: {
    'van-icon': Icon
  },
  data() {
    return {}
  },
  computed: {
    showLog() {
      return this.$store.state.home.showLog
    },
    listLog() {
      return this.$store.state.home.listLog
    }
  },
  methods: {
    setShowLogBox(state) {
      this.$store.commit('set_show_log', state)
    }
  }
}
</script>

<style lang="scss" scoped>
.log-box {
  .hidden-box {
    position: fixed;
    width: 0.2rem;
    height: 0.2rem;
    left: 0;
    bottom: 0;
  }
  .dev-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #000;
    height: 4rem;
    font-size: 0.22rem;
    p {
      padding: 0 0.08rem;
    }
    .dev-box-title {
      background: #eee;
      color: #333;
      line-height: 0.4rem;
    }
    .console-close {
      position: absolute;
      right: 0.08rem;
      top: 0;
    }
    .log-list {
      height: calc(100% - 0.4rem);
      overflow-y: auto;
    }
  }
}
</style>
