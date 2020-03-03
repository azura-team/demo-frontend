<template>
  <div class="x-content" id="home">
    主页
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/_flex.scss';
#home {
  body {
    margin: 0 !important;
  }
  * {
    margin: 0;
    padding: 0;
  }
  [v-cloak] {
    display: none;
  }
}
</style>
