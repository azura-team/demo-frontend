<template>
  <div class="dev-box">
    <van-overlay
      :show="showDev"
      @click="closeDevBox"
    >
      <div
        class="wrapper"
        @click.stop
      >
        <img
          src="@/assets/images/dev.png"
          alt="开发中"
        />
        <p>该模块正在开发中</p>
        <van-icon
          name="cross"
          class="dev-close"
          size="0.34rem"
          @click="closeDevBox"
        />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Overlay, Icon } from 'vant'
export default {
  name: 'dev-box',
  components: {
    'van-overlay': Overlay,
    'van-icon': Icon
  },
  data() {
    return {}
  },
  computed: {
    showDev() {
      return this.$store.state.home.showDev
    }
  },
  methods: {
    closeDevBox() {
      this.$store.commit('set_show_dev', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.dev-box {
  .wrapper {
    background: #fff;
    border-radius: 0.06rem;
    width: 4.6rem;
    height: 5rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    img {
      width: 2.88rem;
      height: 2.64rem;
      position: absolute;
      top: 0.86rem;
      left: 0.86rem;
    }
    p {
      position: absolute;
      font-size: 0.3rem;
      text-align: center;
      width: 100%;
      line-height: 0.4rem;
      bottom: 0.72rem;
      left: 0;
      color: #555;
    }
    .dev-close {
      position: absolute;
      right: 0.33rem;
      top: 0.33rem;
    }
  }
}
</style>
