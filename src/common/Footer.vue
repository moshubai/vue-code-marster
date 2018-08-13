<template>
    <div class="foot_warp">
        <ul class="foot_ul">

            <router-link to="/home" active-class="footer_iactive" tag="li"><a><i class="footer_imga1"></i></a></router-link>
            <router-link to="/news" active-class="footer_iactive" tag="li"><a><i class="footer_imga2"></i></a></router-link>
            <router-link to="/friends" active-class="footer_iactive" tag="li"><a><i class="footer_imga3"></i></a></router-link>
            <router-link to="/mine" active-class="footer_iactive" tag="li"><a><i class="footer_imga4"></i></a></router-link>

        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    // created() {},
    // mounted() {},
    // computed: {
    //     // ...mapState(["geohash"])
    // },
    methods: {
        
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@rem: (2 * 16) * 1rem;
@url: "../assets/img/";

.foot_warp {
    z-index: 100;
    width: 100%;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    background: #000;
    .foot_ul {
        display: -moz-box;
        display: -webkit-box;
        width: 100%;
        box-sizing: border-box;
        padding: 0rem;
        margin: 0rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    li {
        webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background-color: #ffffff;
        border-top: solid 1px #f0f1f5;
        color: #fff;
        width: 0;
        -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        max-width: 100%;
        display: block;
        padding: 12 / @rem 0;
        a {
            width: 100%;
            text-align: center;
            display: block;
            height: 76 / @rem;
            position: relative;
        }
        i.footer_imga1 {
            width: 44 / @rem;
            margin: 0 auto;
            background: url("@{url}/homepage1.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 44 / @rem 76 / @rem;
        }

        i.footer_imga4 {
            width: 44 / @rem;
            margin: 0 auto;
            background: url("@{url}/My.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 44 / @rem 76 / @rem;
        }

        i.footer_imga3 {
            width: 70 / @rem;
            margin: 0 auto;
            background: url("@{url}/pengyouquan2.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 70 / @rem 76 / @rem;
        }

        i.footer_imga2 {
            width: 48 / @rem;
            margin: 0 auto;
            background: url("@{url}/new1.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 48 / @rem 76 / @rem;
        }
    }
    li.footer_iactive {
        i.footer_imga1 {
            width: 44 / @rem;
            margin: 0 auto;
            background: url("@{url}/homepage.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 44 / @rem 76 / @rem;
        }
        i.footer_imga2 {
            width: 48 / @rem;
            margin: 0 auto;
            background: url("@{url}/new2.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 48 / @rem 76 / @rem;
        }
        i.footer_imga3 {
            width: 70 / @rem;
            margin: 0 auto;
            background: url("@{url}/pengyouquan1.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 70 / @rem 76 / @rem;
        }
        i.footer_imga4 {
            width: 44 / @rem;
            margin: 0 auto;
            background: url("@{url}/My1.png") no-repeat;
            height: 76 / @rem;
            display: inline-block;
            background-size: 44 / @rem 76 / @rem;
        }
    }
}
</style>
