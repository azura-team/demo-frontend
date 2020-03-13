<template>
  <div>
    <my-select
      :data="cdata"
      v-model="value"
      val-key="code"
      val-name="name"
      field-lable="数据"
      none-val=""
    ></my-select>
    <!-- 
      data: 数据 见data中的示例
      value: 绑定值
      val-key: 数据对应值key
      val-name: 数据对应值展示的key
      field-lable: 标题
      none-val： 还没有选择或者显示无数据时， 所对应的值
     -->
  </div>
</template>

<script>
export default {
  name: 'select',
  data() {
    return {
      value: '',
      cdata: [
        {
          name: 'aa',
          code: 1
        },
        {
          name: 'bb',
          code: 2
        },
        {
          name: 'cc',
          code: 3
        },
        {
          name: 'dd',
          code: 4
        }
      ]
    }
  },
  created() { },
  methods: {}
}
</script>

<style lang="scss">
</style>
