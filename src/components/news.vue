<template>
    <div class="index_warps">
        <div class="news_warps">
            <ul class="news_list_inform">
                <li>
                    <a>
                        <div class="inform_icon">
                            <img src="../assets/img/xtongzhi.png">
                            <i></i>
                        </div>
                        <div class="inform_text">
                            <h3>系统通知</h3>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="inform_icon">
                            <img src="../assets/img/schi.png">
                            <i></i>
                        </div>
                        <div class="inform_text">
                            <h6>海南专线</h6>
                            <p>[四条]导游：大家请签到！</p>
                            <span>12:30</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="inform_icon">
                            <img src="../assets/img/schi.png">
                            <i></i>
                        </div>
                        <div class="inform_text">
                            <h6>海南专线</h6>
                            <p>[四条]导游：大家请签到！</p>
                            <span>12:30</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="inform_icon">
                            <img src="../assets/img/schi.png">
                            <i></i>
                        </div>
                        <div class="inform_text">
                            <h6>海南专线</h6>
                            <p>[四条]导游：大家请签到！</p>
                            <span>12:30</span>
                        </div>
                    </a>
                </li>

                <li>
                    <a>
                        <div class="inform_icon">
                            <img src="../assets/img/schi.png">
                            <i></i>
                        </div>
                        <div class="inform_text">
                            <h6>海南专线</h6>
                            <p>[四条]导游：大家请签到！</p>
                            <span>12:30</span>
                        </div>
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
    padding: 0 0 (120/@rem) 0;
    .news_warps {
        width: 100%;
        display: block;
        background: #ffffff;
        min-height: 100%;
        .news_list_inform {
            width: 100%;
            display: block;
            li {
                width: 100%;
                display: block;
                border-bottom: 1px solid #e1e1e1;
                padding: (14/@rem) (30/@rem);
                overflow: hidden;
                &:first-child {
                    border-bottom: (15/@rem) solid #f4f7fa;
                }
                a {
                    width: 100%;
                    display: block;
                }
            }
            .inform_icon {
                width: (100/@rem);
                height: (100/@rem);
                display: block;
                position: relative;
                float: left;
                img {
                    width: (100/@rem);
                    height: (100/@rem);
                    border-radius: 100%;
                    display: block;
                }
                i {
                    width: 8px;
                    height: 8px;
                    background: #f5a824;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    border-radius: 100%;
                }
            }
            .inform_text {
                position: relative;
                margin-left: (140/@rem);
                display: block;
                h3 {
                    color: #333333;
                    font-size: (32/@rem);
                    line-height: (100/@rem);
                    display: block;
                    background-image: url("@{url}/syoujiantou.png");
                    background-size: (20/@rem) (35/@rem);
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    &::after {
                        content: "";
                    }
                }
                h6 {
                    color: #333333;
                    font-size: (32/@rem);
                    line-height: (38/@rem);
                    display: block;
                    max-width: 70%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p {
                    margin-top: (20/@rem);
                    color: #7d7d7d;
                    font-size: (28/@rem);
                    line-height: (30/@rem);
                    display: block;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                span {
                    color: #bcbcbc;
                    font-size: (28/@rem);
                    line-height: (30/@rem);
                    position: absolute;
                    right: 0px;
                    top: (8/@rem);
                }
            }
        }
    }
}
</style>
