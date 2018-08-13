<template>
	<div class="index_warps">
        <x-header :left-options="{backText: ''}" class="x-header">详情</x-header>
        <div class="friends_details_warp">
            <h3>最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林最美桂林</h3>
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <img src="../assets/img/pyouquantupian.png">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <img src="../assets/img/pyouquantupian.png">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <img src="../assets/img/pyouquantupian.png">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <img src="../assets/img/pyouquantupian.png">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <img src="../assets/img/pyouquantupian.png">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <img src="../assets/img/pyouquantupian.png">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <img src="../assets/img/pyouquantupian.png">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
        </div>
		<!--<Footer></Footer>-->
    </div>
</template>

<script>
// import Footer from '../common/Footer'
import {XHeader} from "vux";
export default {
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
	},
	components:{
        XHeader
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@rem:(2*16)*1rem;


.index_warps {
    width: 100%;
    display: block;
	min-height: 100%;
	padding: 0 0 120/@rem 0;

    .friends_details_warp {
    width: 100%;
    display: block;
    min-height: 100%;
    background: #ffffff;
    padding: 20/@rem 30/@rem;
    h3 {
        width: 100%;
        display: block;
        padding: 0/@rem 0/@rem 15/@rem;
        font-size: 32/@rem;
        line-height: 50/@rem;
        color: #333333;
    }
    p {
        width: 100%;
        display: block;
        padding: 0/@rem 0/@rem 15/@rem;
        font-size: 28/@rem;
        line-height: 48/@rem;
        color: #333333;
    }
    img {
        width: 100%;
        display: block;
        margin-bottom: 15/@rem;
    }
}
}
</style>
