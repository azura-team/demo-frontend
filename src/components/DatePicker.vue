<template>
  <div class="datepicker-box">
    <van-field
      readonly
      clickable
      :label="fieldLable"
      :value="mydate"
      @click="showPicker = true"
      right-icon="arrow"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
    >
      <van-datetime-picker
        v-model="myval"
        :type="type"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { DatetimePicker, Popup, Field } from 'vant'
export default {
  name: 'datepicker',
  components: {
    'van-popup': Popup,
    'van-datetime-picker': DatetimePicker,
    'van-field': Field
  },
  model: {
    prop: 'fromval',
    event: 'valuePut'
  },
  props: {
    fromval: {
      type: [String, Date],
      default: ''
    },
    fieldLable: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'datetime'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  data () {
    return {
      myval: this.fromval ? new Date(this.fromval) : new Date(),
      showPicker: false,
      trueVal: this.fromval ? new Date(this.fromval) : ''
    }
  },
  computed: {
    mydate () {
      return this.trueVal ? this.$moment(this.trueVal).format(this.format) : `--- 选择${this.fieldLable} ---`
    }
  },
  methods: {
    onConfirm (value) {
      let date = this.$moment(value).format(this.format)
      this.myval = new Date(date)
      this.trueVal = date
      this.$emit('valuePut', this.trueVal)
      this.showPicker = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
