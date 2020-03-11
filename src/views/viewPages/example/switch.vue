<template>
  <div class="main">
    <my-switch
      field-lable="标题标题"
      v-model="value"
      color="#238BF7"
    ></my-switch>
    <!-- 这个封装很简单
      当传入的值是 true  or  false时， 传出的值也是true false
       0  or 1    传出也是  0 1 
       就是不会改变绑定值的类型
     -->
  </div>
</template>

<script>
export default {
  name: 'mm-switch',
  data () {
    return {
      value: 1
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
