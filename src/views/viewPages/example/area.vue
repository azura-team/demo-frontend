<template>
  <div>
    <my-area
      :value="value"
      @submit="submit"
    ></my-area>
    <!-- 
      value： 数据 两种类型 
              当type为默认或者='name',["北京市", "市辖区", "西城区"];
              当type='code' ["11", "1101", "110101"]
              没有初始数据时可传['','',''] 或不传值
      type： 类型  name  code
      field-lable: 标签值 默认为 '省市区'
      @submit: 回调方法  会根据type返回不同类型的值,记得回设传进去的value值
     -->
  </div>
</template>

<script>
export default {
  name: 'areabox',
  data () {
    return {
      value: ["北京市", "市辖区", "西城区"]
    }
  },
  created () { },
  methods: {
    submit (e) {
      console.log(e)
      this.value = e
    }
  }
}
</script>

<style lang="scss">
</style>
