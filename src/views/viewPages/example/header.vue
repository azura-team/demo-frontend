<template>
  <div class="main">
    <my-header
      title="标题标题"
      :is-show-search-icon="true"
      :show-border="true"
    ></my-header>
  </div>
</template>

<script>
export default {
  name: 'mm-header',
  data () {
    return {

    }
  },
  created () { },
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
