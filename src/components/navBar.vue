<template>
  <div class="navBar-box" ref="navbox">
    <div>
      <mt-navbar v-model="mySelected">
        <mt-tab-item
          v-for="item in list"
          :ref="'item' + item.id"
          :key="item.id"
          :id="item.id"
        >{{ item.name }}</mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem } from "mint-ui";
export default {
  name: "navBar",
  components: {
    "mt-navbar": Navbar,
    "mt-tab-item": TabItem
  },
  props: {
    selected: {
      type: Number,
      default: 1
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      mySelected: this.selected
    };
  },
  computed: {
    myWidth() {
      let text = "";
      this.list.forEach(item => {
        text += item.name;
      });
      return text.length * 30;
    }
  },
  watch: {
    mySelected() {
      this.deFirFun();
      let router =
        this.list.filter(item => {
          return item.id === this.mySelected;
        })[0].router || "/home";
      this.$router.replace(router);
    }
  },
  mounted() {
    this.deFirFun();
  },
  methods: {
    deFirFun() {
      let wWidth = document.body.clientWidth;
      let mLeft = this.$refs["item" + this.mySelected][0].$el.offsetLeft;
      let mWidth = this.$refs["item" + this.mySelected][0].$el.clientWidth;
      this.$refs.navbox.scrollLeft = mLeft - wWidth / 2 + mWidth / 2;
    }
  }
};
</script>
<style lang="scss">
.navBar-box {
  overflow-x: auto;
  .mint-navbar .mint-tab-item.is-selected {
    margin-bottom: 0;
  }
  .mint-tab-item-label {
    font-size: 0.3rem;
  }
}
</style>
