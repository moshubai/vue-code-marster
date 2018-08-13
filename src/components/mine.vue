<template>
    <div class="index_warps">
        <div class="mine_warps">
            <div class="mine_headerbg">
                <img src="../assets/img/wbeijimg.png">
                <div class="mine_header">
                    <span><img src="../assets/img/schi.png"></span>
                    <h6>微信名字</h6>
                </div>
            </div>
            <ul class="mine_cont_ul">
                <li @click="goChangeHeader">
                    <a>我的资料</a>
                </li>

            </ul>
            <div class="getout_btn">
                <a>退出登录</a>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "../common/Footer";
export default {
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods:{
        goChangeHeader(){
            this.$router.push("minePicture");
        }
    },
    mounted() {
        console.log("121212");
        // console.log(this.$store);
    },
    beforeCreate() {
        console.log("根组件：beforeCreate");
    },
    created() {
        console.log("根组件：created");
    },
    beforeMount() {
        console.log("根组件：beforeMount");
    },
    destroyed() {
        console.log("离开了");
        if (this.$vux.loading.isVisible()) {
            this.$vux.loading.hide();
        }
    },
    components: {
        Footer
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@rem: (2 * 16) * 1rem;
@url:"../assets/img/";

.index_warps {
    width: 100%;
    display: block;
    min-height: 100%;
    padding: 0 0 120 / @rem 0;
    .mine_warps {
        width: 100%;
        display: block;
        min-height: 100%;
        .mine_headerbg {
            width: 100%;
            display: block;
            position: relative;
            img {
                width: 100%;
                display: block;
            }
            .mine_header {
                width: 100%;
                display: block;
                position: absolute;
                top: 50%;
                text-align: center;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                span {
                    width: (130 / @rem);
                    height: (130 / @rem);
                    display: block;
                    border-radius: 100%;
                    border: 1px solid #ffffff;
                    left: 50%;
                    position: relative;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    overflow: hidden;
                    img {
                        width: (130 / @rem);
                        height: (130 / @rem);
                        display: block;
                    }
                }
                h6 {
                    width: 100%;
                    display: block;
                    color: #ffffff;
                    font-size: (30/@rem);
                    margin-top: (25/@rem);
                    line-height: (50/@rem);
                }
            }
        }
        .mine_cont_ul {
            width: 100%;
            display: block;
            li {
                background: #ffffff;
                padding: (30/@rem);
                display: block;
                border-bottom: 1px solid #e1e1e1;
                &:last-child {
                    border-bottom: none;
                }
                a {
                    width: 100%;
                    display: block;
                    color: #333333;
                    font-size: (30/@rem);
                    line-height: (42/@rem);
                    background-image: url("@{url}/syoujiantou.png");
                    background-size: (18/@rem) (32/@rem);
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                }
            }
        }
        .getout_btn {
            width: 100%;
            display: block;
            padding: (60/@rem) (0)/@rem (80/@rem);
            a {
                width: 100%;
                padding: (26/@rem) 0;
                background: #ffffff;
                display: block;
                text-align: center;
                font-size: (36/@rem);
                line-height: (36/@rem);
                letter-spacing: (10/@rem);
                color: #666666;
            }
        }
    }
}
</style>
