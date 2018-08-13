<template>
  <div class="platform-select-city">
    
    <x-header :left-options="{backText: ''}" class="x-header">选择城市</x-header>
    
    <index-list  :height="indexListHeight">
      <div class="select-city-top" slot="indexListTop">
        <index-list-top :index="currentIndex">
          <div class="hd">
            当前定位城市
          </div>
          <div class="bd">
            <flexbox :gutter="0" wrap="wrap" justify="space-between">
              <flexbox-item :span="4">
                <div class="city-item">
				
                  <i class="iconfont_icon mr5"></i>
                  <inline-loading v-if="!city.name"></inline-loading>
                  <span v-else>{{city.name}}</span>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
        </index-list-top>
        <index-list-top :index="hotIndex">
          <div class="hd">
            热门城市
          </div>
          <div class="bd">
            <flexbox :gutter="0" wrap="wrap" justify="left">
              <flexbox-item :span="4" v-for="(item,index) in hotCity" :key="item.id">
                <div class="city-item" @click.prevent.stop="goBussiness(item)">{{item.name}}</div>
              </flexbox-item>
            </flexbox>
          </div>
        </index-list-top>
      </div>
      <index-section v-for="(cityList,index) in cityData" :key="index" :index="index" slot="indexListContent">
        <cell v-for="(item,index) in cityList" :key="item.id" v-tap @tap.native="goBussiness(item)">
          <span slot="title">
            {{item.name}}
          </span>
        </cell>
      </index-section>
    </index-list>
  </div>
</template>
<script>
import { getCityLists } from "../server/http";

import { Flexbox, FlexboxItem, Group, Cell, XHeader } from "vux";
import IndexList from "@/common/index-list/index-list";
import IndexSection from "@/common/index-list/index-section";
import IndexListTop from "@/common/index-list/index-list-top";
import { mapGetters, mapActions } from "vuex";
import { saveToLocal } from "../store/localStorage";
export default {
  name: "platform-select-city",
  title: "选择城市",
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    IndexList,
    IndexSection,
    IndexListTop,
    XHeader
  },
  data() {
    return {
      autoFixed: false, //搜索
      hotCity: [],
      cityData: [],
      arrayAZ: [],
      currentIndex: "#",
      hotIndex: "@"
    };
  },
  created() {
    this.getSysCity();
  },

  computed: {
    ...mapGetters(["city"]),
    indexListHeight() {
      let height = document.querySelector("#app").clientHeight - 46;
      return parseInt(height);
    }
  },
  methods: {
    ...mapActions(["setCity"]),
    getSysCity() {
      this.cityDatas = this.cityData[0];
      console.log(this.cityDatas);
      getCityLists()
        .then(response => {
          console.log(response.data.data);

          this.hotCity = Object.freeze(response.data.data.hot);
          delete response.data.data.hot;
          this.cityData = Object.freeze(response.data.data);
          this.arrayAZ = Object.keys(this.cityData);
        })
        .catch(err => {
          console.log(err);
        });
      
    },
    goBussiness(item) {
        this.setCity(item);
      //判断哪个页面来，再跳到相应的页面
      this.$router.back();
    }
  }
};
</script>
<style lang="less">
.city-list {
  .weui-cells__title {
    display: none;
  }
  .weui-cells {
    background: transparent;
    &:before,
    &:after {
      display: none;
    }
  }
}
</style>
<style lang="scss" scoped>
.platform-select-city {
  .x-header {
    z-index: 10000;
  }
}
.iconfont_icon{
	width: 12px;
	height: 16px;
	display: inline-block;
  background: url("../assets/img/syoujidingwei1.png") no-repeat;
  background-size: cover;
	
}
.city-list {
  padding: 0 15px;
  .hd {
    line-height: 40px;
    color: #999;
    font-size: 16px;
  }
  .bd {
    margin-left: -10px;
  }
  .city-item {
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    color: #666;
    font-size: 15px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    text-align: center;
    margin: 0 0 10px 10px;
  }
}
</style>
