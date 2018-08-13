<template>
    <div class="index_warps">
        <div class="has_footmenu">
            <div class="banner">
                <div class="banner_left" @click="selectCity">
                    <a class="show_choose_popup">{{city.name}}
                        <span></span>
                    </a>
                </div>
                <div class="banner_right"></div>
                <div class="banner_center">
                    <input type="text" class="typesof_choose_shows" placeholder="目的地/关键词">
                </div>
            </div>
            <div class="tab_conts">
                <div class="notice">
                    <span></span>今日的天气（2018-06-20）晴 </div>
                <ul class="tab_list">
                    <li>
                        <a>
                            <span></span>
                            <p>我的行程</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>点名</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>我的司导</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>收藏</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>百宝箱</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>游记</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>我的账本</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>打赏评价</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="index_nav">
                <h3>
                    <span></span>景点特惠</h3>
                <ul>
                    <li>
                        <a>
                            <span></span>
                            <p>图文段子</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>书库</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>音乐</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span></span>
                            <p>了解桂林</p>
                        </a>
                    </li>
                </ul>
            </div>
            
                <div class="home_card">
                    <ul class="home_card_ul">
                        <li>
                            <a href="javascript:void(0);">
                                <img src="../assets/img/schi.png">
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <img src="../assets/img/slang.png">
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <img src="../assets/img/smai.png">
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <img src="../assets/img/szuihao.png">
                            </a>
                        </li>
                    </ul>
                </div>
               
                    <div class="index_list">
                        <h3>
                            <span></span>景点特惠</h3>
                        <div class="list_content">
                            <div class="list_content_box">
                                <img src="../assets/img/stehuicuxiao.png">
                                <em class="tehui"></em>
                                <em class="xihuan"></em>
                                <span class="list_tip">自主游/上海</span>
                                <a>￥
                                    <span>5026</span>起</a>
                            </div>
                            <h4>三亚抖音</h4>
                            <p>朱茵的出现，吸引了大批市民围观，紫霞仙子虽然穿着简单，但好身材真是挡也挡不住。</p>
                        </div>
                        <div class="list_content">
                            <div class="list_content_box">
                                <img src="../assets/img/stehuicuxiao.png">
                            </div>
                            <h4>三亚抖音</h4>
                            <p>朱茵的出现，吸引了大批市民围观，紫霞仙子虽然穿着简单，但好身材真是挡也挡不住。</p>
                        </div>
                        <div class="list_content">
                            <div class="list_content_box">
                                <img src="../assets/img/stehuicuxiao.png">
                                <em class="tehui"></em>
                                <em class="xihuan active"></em>
                                <span class="list_tip">自主游/上海</span>
                                <a>￥
                                    <span>5026</span>起</a>
                            </div>
                            <h4>三亚抖音</h4>
                            <p>朱茵的出现，吸引了大批市民围观，紫霞仙子虽然穿着简单，但好身材真是挡也挡不住。</p>
                        </div>
                    </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import { getLists } from "../server/http";
import {mapGetters,mapActions} from 'vuex'
import Footer from "../common/Footer";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    ...mapActions(["setCity"]),
    
    selectCity() {
      this.$router.push("selectcity");
    },
    getFun() {
      console.log("----------");
      getLists()
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {

    this.getFun();
  },
  // beforeCreate() {
  //   console.log("根组件：beforeCreate");
  // },

  created() {
    console.log("根组件：created");
    if(!this.city.name){
      this.$store.dispatch('setCity', { id: '310100', name: '上海' })
    }
    // this.getSysHomeData(this.city ? this.city.id : "");
  },
  // beforeMount() {
  //   console.log("根组件：beforeMount");
  // },
  // destroyed() {
  //   console.log("离开了");
  // },

  computed: {
    ...mapGetters(["city"])
  },
  // watch: {
  //   city(c) {
  //     this.getSysHomeData(c ? c.id : "");
  //   }
  // },

  components: {
    Footer
  }
};
</script>

    <style scoped lang="less">
@rem: (2 * 16) * 1rem;
.index_warps {
  width: 100%;
  display: block;
  min-height: 100%;
  padding: 0 0 120 / @rem 0;
  .banner {
    background: url("../assets/img/sbanner.png") no-repeat center top;
    background-size: 100% 100%;
    height: 280 / @rem;
    position: relative;
    overflow: hidden;
    .banner_left {
      color: #fff;
      font-size: 11px;
      float: left;
      display: block;
      a {
        position: absolute;
        left: 40 / @rem;
        top: 20 / @rem;
        display: block;
        color: #ffffff;
        span {
          height: 12 / @rem;
          width: 22 / @rem;
          display: inline-block;
          background: url("../assets/img/sxiajiatou.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
    .banner_right {
      width: 120 / @rem;
      display: block;
      float: right;
    }
    .banner_center {
      margin-right: 120 / @rem;
      margin-left: 120 / @rem;
      input {
        display: block;
        margin: 20 / @rem auto;
        height: 50 / @rem;
        width: 450 / @rem;
        border-radius: 10 / @rem;
        text-align: center;
        background: url("../assets/img/ssousuo.png") no-repeat 100 / @rem center,
          #fff;
        background-size: 13px;
      }
    }
  }
  .tab_conts {
    background-color: #fff;
    overflow: hidden;
    .notice {
      padding: 0 15px;
      font-size: 13px;
      color: #9e9e9e;
      margin: 10px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        display: inline-block;
        height: 24 / @rem;
        width: 26 / @rem;
        background: url("../assets/img/stongzhi.png") no-repeat center top;
        background-size: 26 / @rem;
        margin-right: 20 / @rem;
      }
    }
    .tab_list {
      display: block;
      width: 100%;
      overflow: hidden;
      li {
        width: 25%;
        text-align: center;
        display: block;
        float: left;
        a {
          color: #333333;
          display: block;
        }
        span {
          display: inline-block;
          height: 92 / @rem;
          width: 92 / @rem; //border-radius: /@rem(46);
          background: url("../assets/img/swodexiangcheng.png") no-repeat center;
          background-size: 100% 100%;
        }
        p {
          text-align: center;
          margin-bottom: 0px;
          padding-bottom: 15 / @rem;
        }
        &:nth-of-type(2) span {
          background: url("../assets/img/sdianming.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(3) span {
          background: url("../assets/img/ssidao.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(4) span {
          background: url("../assets/img/ssoucang.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(5) span {
          background: url("../assets/img/sbaibaoxiang.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(6) span {
          background: url("../assets/img/syouji.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(7) span {
          background: url("../assets/img/szhangben.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(8) span {
          background: url("../assets/img/sdashangpingjia.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
  }
  .index_nav {
    padding: 0 30 / @rem;
    background: #fff;
    overflow: hidden;
    h3 {
      font-size: 28 / @rem;
      color: #222;
      padding: 30 / @rem 0;
      margin-bottom: 0px;
      span {
        display: inline-block;
        width: 8 / @rem;
        height: 20 / @rem;
        background: #4a66ed;
        margin-right: 10 / @rem;
      }
    }
    ul {
      display: block;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        text-align: center;
        a {
          color: #333333;
          width: 100%;
          display: block;
          text-align: center;
          span {
            display: inline-block;
            height: 44 / @rem;
            width: 44 / @rem; //border-radius: /@rem(46);
            background: url("../assets/img/stuwenduanzi.png") no-repeat center;
            background-size: 100% 100%;
          }
        }
        p {
          text-align: center;
        }
        &:nth-of-type(2) a span {
          background: url("../assets/img/sshuku.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(3) a span {
          background: url("../assets/img/syinwei.png") no-repeat center;
          background-size: 100% 100%;
        }
        &:nth-of-type(4) a span {
          background: url("../assets/img/sliangjiueguilin.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
  }
  .home_card {
    background: #fff;
    margin: 20 / @rem auto;
    padding: 0 30 / @rem;
    text-align: center;
    overflow: hidden;
    .home_card_ul {
      width: 100%;
      display: block;
      overflow: hidden;
      li {
        display: block;
        float: left;
        width: 25%;
        padding: 20 / @rem 5 / @rem;
        a {
          width: 100%;
          display: block;
        }
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
  .index_list {
    padding: 0 30 / @rem;
    background: #fff;
    overflow: hidden;
    h3 {
      font-size: 28 / @rem;
      color: #222;
      margin: 30 / @rem 0;
      span {
        display: inline-block;
        width: 8 / @rem;
        height: 20 / @rem;
        background: #4a66ed;
        margin-right: 10 / @rem;
      }
    }
    .list_content {
      .list_content_box {
        position: relative;
        .list_tip {
          height: 40 / @rem;
          font-size: 24 / @rem;
          color: #fefefe;
          background-color: rgba(0, 0, 0, 0.26);
          border-radius: 20 / @rem;
          padding: 0 20 / @rem;
          position: absolute;
          top: 20 / @rem;
          left: 20 / @rem;
        }
        a {
          position: absolute;
          left: 25 / @rem;
          bottom: 17 / @rem;
          font-size: 28 / @rem;
          color: #fefefe;
          padding: 10 / @rem 20 / @rem;
          background-color: #ffba00;
          border-radius: 8 / @rem;
        }
        .tehui {
          width: 38 / @rem;
          height: 52 / @rem;
          background: url("../assets/img/stehui.png") no-repeat center top;
          background-size: 100% 100%;
          position: absolute;
          right: 25 / @rem;
          top: 0;
        }
        .xihuan {
          width: 44 / @rem;
          height: 44 / @rem;
          background: url("../assets/img/sshoucang12.png") no-repeat center top;
          background-size: 100% 100%;
          position: absolute;
          right: 25 / @rem;
          bottom: 20 / @rem;
        }
        em.active {
          width: 44 / @rem;
          height: 44 / @rem;
          background: url("../assets/img/like_icon.png") no-repeat center top;
          background-size: 100% 100%;
          position: absolute;
          right: 25 / @rem;
          bottom: 20 / @rem;
        }
      }
      h4 {
        font-size: 28 / @rem;
        color: #333;
        margin: 16 / @rem 0;
      }
      p {
        font-size: 26 / @rem;
        color: #7d7d7d;
        margin-bottom: 40 / @rem;
      }
    }
  }
}
</style>
