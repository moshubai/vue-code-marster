<template>
    <div style="height: 100%">
        <div class="binding_information_warp">
            <x-header :left-options="{backText: ''}" class="x-header">登录</x-header>
            <ul class="mine_datas">

                <li class="shouji">
                    <div class="mine_datas_list">
                        <label><input type="text" v-model="sPhone" name="shoujiPhone" class="form_input"
                                      placeholder="请输入手机号"></label>
                    </div>
                    <div class="yangzhengm">
                        <input type="button" v-model="smsCode" @click="getSmsCode" :class="{disabled:isDisabled}" :disabled="isDisabled"/>
                    </div>
                </li>
                <li class="yangzheng">
                    <div class="mine_datas_list">
                        <label><input type="text" class="form_input" placeholder="请输入验证码"></label>
                    </div>
                </li>
            </ul>

            <div class="book_btn">
                <a href="javascript:void(0)" @click="booksubilme">登录</a>
            </div>
        </div>
    </div>

</template>

<script>
    import {XHeader} from "vux";
    export default {
        components: {
            XHeader
        },
        // computed: {

        // },
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                sPhone: "",
                smsCode: "获取验证码",
                isDisabled: false,
                text: '',
                totalTime: 60,
            };
        },
        methods: {
            getSmsCode() {
                console.log("------------");
                if (this.isDisabled) return; //改动的是这两行代码
                this.isDisabled = true;
                this.smsCode = this.totalTime + 'S';
                let clock = window.setInterval(() => {
                    this.totalTime--;
                    this.smsCode = this.totalTime + 'S';
                    if (this.totalTime < 0) {
                        window.clearInterval(clock);
                        this.smsCode = '获取验证码';
                        this.totalTime = 60;
                        this.isDisabled = false;  //这里重新开启
                    }
                }, 1000)

            },

            booksubilme() {
                // this.$vux.loading.show({
                //     text: ""
                // });
                this.$vux.toast.show({
                    text: "登录成功"
                });

                this.$store.commit("setStorage", {
                    user: this.sPhone
                });
                this.$store.commit("setLogin", "1");
                this.$router.push("home");
            }
        },

        mounted() {
            console.log(this.$store);
        },
        // beforeCreate() {
        //     console.log("根组件：beforeCreate");
        // },
        // created() {
        //     console.log("根组件：created");
        // },
        // beforeMount() {
        //     console.log("根组件：beforeMount");
        // },
        destroyed() {
            console.log("离开了");
            if (this.$vux.loading.isVisible()) {
                this.$vux.loading.hide();
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @rem: (2 * 16) * 1rem;
    @url: "../assets/img/";

    .binding_information_warp {
        width: 100%;
        display: block;
        padding-bottom: (150 / @rem);
        min-height: 100%;
        background: #ffffff;

        .mine_datas {
            width: 100%;
            display: block;
            padding: (180 / @rem) (30 / @rem);
            li {
                padding: (30 / @rem) (70 / @rem);
                display: block;
                overflow: hidden;
                border-bottom: 1px solid #e1e1e1;
                position: relative;
                .mine_datas_list {
                    width: 100%;
                    display: block;
                    label {
                        width: 100%;
                        input {
                            width: 100%;
                        }
                    }
                }
                .yangzhengm {
                    position: absolute;
                    top: (26 / @rem);
                    right: (36 / @rem);
                    display: block;
                    input {
                        padding: (8 / @rem) (4 / @rem);
                        font-size: (26 / @rem);
                        display: inline-block;
                        line-height: (30 / @rem);
                        border-radius: (8) / @rem;
                        color: #ffffff;
                        border:1px solid #4a66ed;
                        background: #4a66ed;
                        width: (180 / @rem);
                    }
                    input.disabled {
                        border: 1px solid #e1e1e1;
                        color: #cccccc;
                        background: transparent;
                    }
                }
            }

            .shouji {
                &::before {
                    width: (22 / @rem);
                    height: (31 / @rem);
                    display: block;
                    background: url("@{url}/shouji.png");
                    background-size: cover;
                    background-position: 0 0;
                    content: "";
                    left: (16 / @rem);
                    top: (36 / @rem);
                    position: absolute;
                }
            }
            .zhengjianhaoma {
                &::before {
                    width: (27 / @rem);
                    height: (26 / @rem);
                    display: block;
                    background: url("@{url}/zhengjianhaoma.png");
                    background-size: cover;
                    background-position: 0 0;
                    content: "";
                    left: (16 / @rem);
                    top: (38 / @rem);
                    position: absolute;
                }
            }
            .yangzheng {
                &::before {
                    width: (24 / @rem);
                    height: (30 / @rem);
                    display: block;
                    background: url("@{url}/yangzheng.png");
                    background-size: cover;
                    background-position: 0 0;
                    content: "";
                    left: (16 / @rem);
                    top: (36 / @rem);
                    position: absolute;
                }
            }
        }
        .binding_clause {
            padding: (30 / @rem) (46 / @rem);
            label {
                width: 100%;
                display: block;
                color: #888888;
                input {
                    vertical-align: text-top;
                    margin-right: (20 / @rem);
                }
                a {
                    color: #3b3b3b;
                }
            }
        }
        .book_btn {
            width: 100%;
            display: block;
            padding: 0 (50 / @rem) (100 / @rem);
            background: #ffffff;
            a {
                width: 100%;
                padding: (26 / @rem) 0;
                background: #4a66ed;
                display: block;
                text-align: center;
                border-radius: (10 / @rem);
                font-size: (36 / @rem);
                line-height: (36 / @rem);
                letter-spacing: (10 / @rem);
                color: #ffffff;
            }
        }
    }
</style>
