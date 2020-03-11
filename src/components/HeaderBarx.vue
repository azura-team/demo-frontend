<template>
  <div
    class="header-bar"
    :class="{noneShowBorder: !showBorder}"
  >
    <div class="nav-t"></div>
    <div
      class="search-t search-box"
      :class="{active:isShowSearchBox}"
    ></div>
    <div class="nav-main">
      <van-nav-bar
        :title="title"
        :left-text="leftText"
        left-arrow
        class="my-header-bar"
        @click-left="goBack"
      >

        <van-button
          slot="right"
          type="default"
          icon="search"
          @click="isShowSearchBox = true"
          v-if="isShowSearchIcon"
        ></van-button>
      </van-nav-bar>
      <div
        class="search-box"
        :class="{active:isShowSearchBox}"
      >
        <van-search
          v-model="searchValue"
          show-action
          placeholder="请输入搜索关键词"
          @search="confirmSearch"
          @cancel="isShowSearchBox = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar, Search, Button } from 'vant'
export default {
  name: 'HeaderBar',
  components: {
    'van-nav-bar': NavBar,
    'van-search': Search,
    'van-button': Button
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    //头部导航 左侧要显示的图标
    leftIcon: {
      type: String,
      default: ''
    },
    //头部导航 左侧要显示的文字
    leftText: {
      type: String,
      default: '返回'
    },
    //返回
    customBack: {
      type: Function
    },
    //搜索框搜索
    serachFun: {
      type: Function,
      default: function () { }
    },
    //是否显示搜索框
    isShowSearchIcon: {
      type: Boolean,
      default: false
    },
    //是否显示下边框
    showBorder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchValue: '',
      isShowSearchBox: false
    }
  },
  methods: {
    goBack () {
      if (this.customBack) {
        this.customBack()
      } else {
        window.history.go(-1)
      }
      console.log(this.$store)
      this.$store.commit('set_loading', false)
    },
    confirmSearch (e) {
      if (e.keyCode == 13) {
        event.preventDefault()
        this.loadSearchData()
      }
    },
    loadSearchData () {
      this.serachFun(this.searchValue)
    },
    clickTitle () {
      this.barTitle()
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  border: 1px solid #f1f4f8;
  &.noneShowBorder {
    border: 0;
  }
  .nav-main {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .my-header-bar {
    height: 1rem;
    .van-button--default {
      border: 0;
      height: 1rem;
    }
    .van-nav-bar__left {
      line-height: 1rem;
      .van-nav-bar__text:active {
        background-color: #e6e6e6;
      }
    }
    .van-nav-bar__title {
      line-height: 1rem;
      font-size: 0.3rem;
    }
    .van-nav-bar__right {
      line-height: 1rem;
    }
  }
  .nav-t {
    height: 1rem;
  }
  .search-box {
    height: 0px;
    overflow: hidden;
    transition: height 0.4s;
    -moz-transition: height 0.4s;
    -webkit-transition: height 0.4s;
    -o-transition: height 0.4s;
    &.active {
      height: 54px;
    }
  }
}
</style>
