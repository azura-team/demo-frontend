<template>
  <div class="main">
    <my-datetime-picker
      v-model="value"
      type="datetime"
      field-lable="时间"
      format="YYYY-MM-DD HH:mm"
    ></my-datetime-picker>
    <!-- 
      vaule： 时间数据  [Date,String]
      type：  选择器类型  [datetime,date,time,year-month]
      field-lable: 标题
      format：显示时间格式，绑定回传时间格式  类型为String
     -->
  </div>
</template>

<script>
export default {
  name: 'datetimep',
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
