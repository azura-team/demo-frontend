<template>
  <div class="main">
    <my-datetime-picker
      v-model="value"
      type="datetime"
      field-lable="时间"
      format="YYYY-MM-DD HH:mm"
    ></my-datetime-picker>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value () {
      console.log(this.value)
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
