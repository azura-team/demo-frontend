<template>
  <div class="main">
    <button @click="openDevBox">开发中</button>
  </div>
</template>

<script>
export default {
  name: 'isdev',
  data() {
    return {

    }
  },
  methods: {
    openDevBox() {
      this.$store.commit('show_dev')
    }
  }
}
</script>

<style lang="scss">
.main {
  height: 20rem;
  background: #fff;
}
</style>
