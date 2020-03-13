<template>
  <div class="main">
    <p>点击最左下角 调出log界面(用于在手机端无法调出调试界面时使用)</p>
    <button @click="addLog">添加一条log</button>
  </div>
</template>

<script>
export default {
  name: 'mm-switch',
  data() {
    return {}
  },
  methods: {
    addLog() {
      this.$store.commit('add_log', '我是一条log')
    }
  }
}
</script>

<style lang="scss">
</style>
