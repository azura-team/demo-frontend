<template>
  <div class="header-bar">
    <van-cell
      center
      :title="fieldLable"
    >
      <van-switch
        v-model="checked"
        slot="right-icon"
        size="24"
        :active-color="color"
      />
    </van-cell>
  </div>
</template>

<script>
import { Cell, Switch } from 'vant'
export default {
  name: 'my-switch',
  components: {
    'van-cell': Cell,
    'van-switch': Switch
  },
  model: {
    prop: 'fromval',
    event: 'valuePut'
  },
  props: {
    fromval: {
      type: [Boolean, Number],
      default: false
    },
    fieldLable: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#238BF7'
    }
  },
  data () {
    return {
      checked: !!this.fromval,
      valType: 'Boolean'
    }
  },
  watch: {
    fromval () {
      this.setMyValType()
    },
    checked () {
      this.$emit('valuePut', this.getNeedVal())
    }
  },
  mounted () {
    this.setMyValType()
  },
  methods: {
    setMyValType () {
      if (this.fromval === true || this.fromval === false) {
        this.valType = 'Boolean'
      } else {
        this.valType = 'Number'
      }
    },
    getNeedVal () {
      if (this.valType === 'Boolean') {
        return this.checked
      } else {
        return this.checked ? 1 : 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
