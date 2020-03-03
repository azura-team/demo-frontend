<template>
  <div class="bottom-tools">
    <ul class="unit-lists" v-if="isShowSecond"> 
      <li v-for="(item,index) in typelists" :key="index" @click="changeType(index)" :class="typeIndex == index?'selectedLi':''">{{item.name}}</li>
    </ul>
    <ul class="tool-unit">
      <li
        v-for="(item,index) in list"
        :key="index"
        :class="item.choiced?'selectedLi':''"
        @click="changeSelect(item,index)"
      >
      <span :class="setClass(item)"></span>
      <div>{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BottomTools",
  props: {
    switchMarker: {
      type: Function,
      default: function() {}
    },
    list:{
      type:Array,
      default:[]
    },
    isShowSecond:{
      type:Boolean
    },
    types:{
      type:Array
    }
  },
  data() {
    return {
      // list:[
      //   {name:"水模块",type:"water",choiced:true},
      //   {name:"污染源",type:"pollution",choiced:false},
      //   {name:"常规空气",type:"air",choiced:false},
      //   {name:"噪声",type:"noice",choiced:false},
      // ],
      // types:[
      //   [{
      //     name:"饮用水",
      //     type:1
      //   },
      //   {
      //     name:"河流水",
      //     type:2
      //   },
      //    {
      //     name:"近岸海域",
      //     type:3
      //   }],
      //    [{
      //     name:"废气",
      //     type:1
      //   },
      //   {
      //     name:"废水",
      //     type:2
      //   },
      //    {
      //     name:"入海排污",
      //     type:3
      //   }],
      //      [{
      //     name:"国控",
      //     type:1
      //   },
      //   {
      //     name:"省控",
      //     type:2
      //   },
      //    {
      //     name:"市控",
      //     type:3
      //   },
      //    {
      //     name:"区控",
      //     type:3
      //   },
      //    {
      //     name:"乡镇",
      //     type:3
      //   }
      //   ],
      //    [{
      //     name:"功能区",
      //     type:1
      //   },
      //   {
      //     name:"区域",
      //     type:2
      //   },
      //    {
      //     name:"交通",
      //     type:3
      //   }]
      // ],
      typeIndex:0,
      modelIndex:0
    };
  },
  computed:{
    typelists(){
      return this.types[this.modelIndex]
    }
  },
  mounted(){
    this.typeIndex = 0
  },
  watch:{
    modelIndex(){
      //this.switchMarker({model:this.list[this.modelIndex].type,type:this.typeIndex})
    },
    typeIndex(){
      this.switchMarker({model:this.list[this.modelIndex].type,type:this.typeIndex})
    }
  },
  methods: {
    changeSelect(item,idx) {
      this.typeIndex = 0
     this.modelIndex = idx
     this.list.forEach((item)=>{
       item.choiced = false
     })
     item.choiced = true
     this.switchMarker({model:this.list[this.modelIndex].type,type:this.typeIndex})
    },
    changeType(index){
      this.typeIndex = index
    },
    setClass(item) {
      let obj = ''
      if(item.choiced){
        obj = item.type + '-choiced'
      }else{
        obj = item.type
      }
      return obj
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_flex.scss";
.bottom-tools {
  position: absolute;
  bottom: 0;
  z-index: 999;
  width: 100%;
  .unit-lists {
    height: 0.96rem;
    width: 94.7%;
    margin: 0 auto;
    position: relative;
    box-shadow:0px 4px 12px 0px rgba(143,170,198,0.5);
    border:1px solid rgba(224,224,224,1);
    @include justify-content(space-around);
    font-size: 0.3rem;
  }
  .tool-unit {
    height: 1.28rem;
    @include justify-content(space-between);
    font-size: 0.24rem;
  }
  ul {
    @include flexbox;
    padding: 0;
    margin: 0;
    list-style: none;
    background:rgba(255,255,255,1);
    li {
      @include flexbox;
      @include align-items(center);
      @include justify-content(center);
      @include flex-direction(column);
      width: 1.45rem;
      height: 100%;
      line-height: 0.56rem;
      color: #000;
      cursor: pointer;
      span {
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        }
      .water {
        background: url(../assets/images/water.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
      }
        .water-choiced{
        background: url(../assets/images/water-choiced.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
       .pollution {
        background: url(../assets/images/pollution.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
      }
       .pollution-choiced {
        background: url(../assets/images/pollution-choiced.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
       .air {
        background: url(../assets/images/air.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
      }
        .air-choiced {
        background: url(../assets/images/air-choiced.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
       .noice {
        background: url(../assets/images/noice.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
      }
       .noice-choiced {
        background: url(../assets/images/noice-choiced.png) no-repeat;
         background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .realtime {
        background: url(../assets/images/realtime.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .history {
        background: url(../assets/images/history.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .excee {
        background: url(../assets/images/excee.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .mapicon {
        background: url(../assets/images/mapicon.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .realtime-choiced {
        background: url(../assets/images/realtime-choiced.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .history-choiced {
        background: url(../assets/images/history-choiced.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .excee-choiced {
        background: url(../assets/images/excee-choiced.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .mapicon-choiced {
        background: url(../assets/images/mapicon-choiced.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        position: relative;
      }
      .water-choiced:before, .pollution-choiced:before, .air-choiced:before, .noice-choiced:before, .realtime-choiced:before, history-choiced:before, .excee-choiced:before, .mapicon-choiced:before {
         content:'';
    display: block;
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid rgba(255,255,255,1);
    border-bottom: 4px solid transparent;
      }
      }
    }
    .selectedLi {
      color: rgba(50,150,250,1);
    }
}
</style>

