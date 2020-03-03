<template>
  <label class="aep-switch">
    <input
      class="aep-switch-input"
      :disabled="disabled"
      @change="$emit('change', currentValue)"
      type="checkbox"
      v-model="currentValue"
    />
    <span class="aep-switch-core"></span>
    <div class="aep-switch-label">
      <slot></slot>
    </div>
  </label>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
export default {
  name: "aep-switch",
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style lang="scss">
.aep-switch {
  display: flex;
  align-items: center;
  position: relative;
  pointer-events: none;
  .aep-switch-label {
    margin-left: 10px;
    display: inline-block;
    &:empty {
      margin-left: 0;
    }
  }
  .aep-switch-core {
    display: inline-block;
    position: relative;
    width: 0.96rem;
    height: 0.5rem;
    border: 1px solid #969696;
    border-radius: 16px;
    box-sizing: border-box;
    background: #969696;
    &::after,
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.3s;
      border-radius: 15px;
    }
    &::after {
      width: 0.46rem;
      height: 0.46rem;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }
    &::before {
      width: 0.92rem;
      height: 0.46rem;
      background-color: #969696;
    }
  }
  .aep-switch-input {
    display: none;
    &:checked {
      + .aep-switch-core {
        border-color: #3296fa;
        background-color: #3296fa;
        &::before {
          transform: scale(0);
        }
        &::after {
          -webkit-transform: translateX(0.48rem);
          transform: translateX(0.48rem);
        }
      }
    }
  }
}
</style>