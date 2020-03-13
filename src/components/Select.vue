<template>
  <div class="select-box">
    <van-field
      readonly
      clickable
      :label="fieldLable"
      :value="myname"
      @click="showPicker = true"
      right-icon="arrow"
      :placeholder="`选择${fieldLable}`"
      input-align="right"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        :value-key="valName"
        :default-index="defaultIndex"
      />
    </van-popup>
  </div>
</template>

<script>
import { Picker, Popup, Field } from 'vant'
export default {
  name: 'Select',
  components: {
    'van-popup': Popup,
    'van-picker': Picker,
    'van-field': Field
  },
  model: {
    prop: 'fromval',
    event: 'valuePut'
  },
  props: {
    fromval: {
      type: [String, Number],
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    valKey: {
      type: String,
      default: ''
    },
    valName: {
      type: String,
      default: ''
    },
    fieldLable: {
      type: String,
      default: ''
    },
    noneVal: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      myval: this.fromval,
      showPicker: false
    }
  },
  computed: {
    columns() {
      return this.data
    },
    defaultIndex() {
      let temp = 0
      this.columns.forEach((item, index) => {
        if (item[this.valKey] === this.myval) {
          temp = index
        }
      })
      return temp
    },
    myname() {
      let temp = ''
      this.columns.forEach(item => {
        if (item[this.valKey] === this.myval) {
          temp = item[this.valName]
        }
      })
      return temp
    }
  },
  methods: {
    onConfirm(value) {
      this.myval = value[this.valKey]
      this.$emit('valuePut', this.myval)
      this.showPicker = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
