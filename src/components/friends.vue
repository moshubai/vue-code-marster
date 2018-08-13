<template>
    <div class="index_warps">
        <div class="friends_warps">
            <ul class="friends_conts">
                <li>
                    <a @click="goFriendDetails">
                        <div class="conts_imgs">
                            <img src="../assets/img/pyouquantupian.png">
                        </div>
                        <h4>最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林</h4>
                        <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
                    </a>
                </li>
                <li>
                    <a @click="goFriendDetails">
                        <div class="conts_imgs">
                            <img src="../assets/img/pyouquantupian.png">
                        </div>
                        <h4>最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林</h4>
                        <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
                    </a>
                </li>
                <li>
                    <a @click="goFriendDetails">
                        <div class="conts_imgs">
                            <img src="../assets/img/pyouquantupian.png">
                        </div>
                        <h4>最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林</h4>
                        <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
                    </a>
                </li>
            </ul>
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
        goFriendDetails(){
            this.$router.push('friendsDetails');
        },
    },
    components: {
        Footer
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@rem: (2 * 16) * 1rem;

.index_warps {
    width: 100%;
    display: block;
    min-height: 100%;
    padding: 0 0 120/@rem 0;
    .friends_warps {
    width: 100%;
    display: block;
    min-height: 100%;
    .friends_conts {
        width: 100%;
        display: block;
        padding: 20/@rem 30/@rem 50/@rem;
        li {
            width: 100%;
            display: block;
            background: #ffffff;
            border-radius: 10/@rem;
            margin-bottom: 20/@rem;
            overflow: hidden;
            a {
                width: 100%;
                display: block;
            }
            .conts_imgs {
                width: 100%;
                display: block;
                overflow: hidden;
                img {
                    width: 100%;
                    display: block;
                }
            }
            h4 {
                width: 100%;
                display: block;
                padding: 30/@rem 17/@rem 15/@rem;
                font-size: 30/@rem;
                line-height: 34/@rem;
                color: #333333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p {
                width: 100%;
                display: block;
                padding: 0/@rem 17/@rem 35/@rem;
                font-size: 26/@rem;
                line-height: 48/@rem;
                color: #7d7d7d;
            }
        }
    }
}
}
</style>
