<template>
    <div class="mine_data_warps">
        <x-header :left-options="{backText: ''}" class="x-header">个人信息</x-header>
        <div>
            <div class="mine_header">
                <div class="mine_header_img group_popup_show" @click="isActive = true">
                    <div class="mine_header_imgs">
                        <span><img :src="uploadModel.imageUrl"></span>
                    </div>
                    <span>头像</span>

                </div>
            </div>
            <ul class="mine_datas">
                <li>
                    <div class="mine_datas_list">
                        <span>个人姓名</span>墨书白
                    </div>
                </li>
                <li>
                    <div class="mine_datas_list">
                        <span>手机号码</span>17611112222
                    </div>
                </li>
            </ul>
        </div>

        <div class="group_popup_bg" v-if="isActive" @click="isActive=false"></div>
        <!-- 类型 -->
        <div class="group_name_popup" v-bind:class="{group_name_showc:isActive}">
            <ul class="group_name_ul typesof_choose_clul">
                <li>拍照</li>
                <li>
                    <input type="file" class="upimages" accept="image/*" @change="upDatePicture($event)"
                           v-if="!uploadModel.changePicture">
                    <span>从相册选择</span>
                </li>
            </ul>
            <div class="popup_btn popup_hide" @click="hidePop">
                <a href="javascript:void(0);">取消</a>
            </div>
        </div>
        <div>
            <x-dialog v-model="uploadModel.changePicture" class="dialog-demo">
                <div class="img-box">
                    <img v-bind:src="codeImage" id="avatarImage"/>
                </div>
                <ul class="changepicbtn">
                    <li @click="savePicture">确认上传</li>
                    <li @click="uploadModel.changePicture=false">取消</li>
                </ul>
            </x-dialog>
        </div>
    </div>

</template>

<script>
    import {XHeader, Actionsheet, XDialog} from "vux";
    import "cropperjs/dist/cropper.css";
    import Cropper from "cropperjs";

    export default {
        data() {
            return {
                codeImage: "",
                cropperImg: "",
                isActive: false,
                uploadModel: {
                    changePicture: false,
                    imageUrl: "https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg"
                },

            };
        },
        methods: {
            upDatePicture(event) {
                let _this = this;
                this.isActive = false;
                if (event.target.files == null || event.target.files.length === 0) {
                    return;
                }
                let files = event.target.files;
                console.log(files);

                let reader = new FileReader();
                let file = files[0];
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    _this.codeImage = this.result;
                    console.log(_this.codeImage);
                    _this.uploadModel.changePicture = true;
                    _this.cropperImg.replace(this.result);
                };
            },
            savePicture() {
                let _this = this;
                _this.uploadModel.imageUrl = "";
                _this.uploadModel.changePicture = false;
                console.log("上传头像中");
                let formData = new FormData();
                let base64 = this.cropperImg.getCroppedCanvas().toDataURL("image/png");
                _this.uploadModel.imageUrl = base64;
                _this.codeImage = '';
                console.log(base64);
                let file = _this.dataBlob(base64);
                formData.append("file", file, "avatar.png");
                console.log(formData);
            },
            dataBlob(dataURI) {
                // 图片转成Buffer
                let byteString = atob(dataURI.split(",")[1]);
                let mimeString = dataURI
                    .split(",")[0]
                    .split(":")[1]
                    .split(";")[0];
                let ab = new ArrayBuffer(byteString.length);
                let ia = new Uint8Array(ab);
                for (let i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ab], {type: mimeString});
            },
            hidePop() {
                this.isActive = false;
                this.codeImage = '';
            }
        },

        mounted() {
            var image = document.getElementById("avatarImage");
            this.cropperImg = new Cropper(image, {
                autoCrop: false,
                viewMode: 1,
                aspectRatio: 1,
                autoCropArea: 0.5,
                dragMode: "move",
                cropBoxResizable: false,
                minCropBoxWidth: 100,
                ready: function () {
                    console.log('---');
                    this.cropper.crop();
                }
            });
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
            // if (this.$vux.loading.isVisible()) {
            //     this.$vux.loading.hide();
            // }
        },
        components: {
            XHeader,
            Actionsheet,
            XDialog
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @rem: (2 * 16) * 1rem;
    @url: "../assets/img/";
    @import "~vux/src/styles/close";

    .dialog-demo {
        .weui-dialog {
            border-radius: 8px;
            padding-bottom: 8px;
        }
        .dialog-title {
            line-height: 30px;
            color: #666;
        }
        .img-box {
            height: 350px;
            overflow: hidden;
        }
        .changepicbtn {
            width: 100%;
            display: block;
            overflow: hidden;
            li {
                width: 50%;
                display: block;
                float: left;
                padding: (20 / @rem) 0;
                font-size: (30 / @rem);
                line-height: (40 / @rem);
                &:first-child {
                    border-right: 1px solid #e1e1e1;
                }
            }
        }
    }

    .group_popup_bg {
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }

    .group_name_popup {
        width: 100%;
        position: fixed;
        background: #efeff4;
        z-index: 20;
        bottom: 0rem;
        left: 0rem;
        -webkit-transform: translateY(100%);
        -ms-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-transition: -webkit-transform 300ms, opacity 300ms;
        transition: transform 300ms, opacity 300ms;
        opacity: 0;
        .group_name_ul {
            background: #ffffff;
            overflow-y: scroll;
            display: block;
            li {
                width: 100%;
                padding: (20 / @rem) 0;
                font-size: (30 / @rem);
                line-height: (60 / @rem);
                display: block;
                text-align: center;
                color: #000000;
                border-bottom: 1px solid #f1f1f1;
                position: relative;
                .upimages {
                    width: 100%;
                    display: block;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    opacity: 0;
                    bottom: 0px;
                    right: 0px;
                }
                &:last-child {
                    border-bottom: none;
                }
            }
        }
        .popup_btn {
            width: 100%;
            display: block;
            background: #ffffff;
            margin-top: (10 / @rem);
            a {
                width: 100%;
                display: block;
                padding: (20 / @rem) 0;
                font-size: (30 / @rem);
                line-height: (60 / @rem);
                text-align: center;
                color: #333333;
            }
        }
    }

    .group_name_popup.group_name_showc {
        opacity: 1;
        transform: translateY(0px);
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
    }

    .mine_data_warps {

        width: 100%;
        display: block;
        min-height: 100%;
        .mine_header {
            width: 100%;
            display: block;
            padding: (8 / @rem) (30 / @rem);
            background: #ffffff;
            .mine_header_img {
                width: 100%;
                display: block;
                overflow: hidden;
                background-image: url("@{url}/syoujiantou.png");
                background-size: (18 / @rem) (32 / @rem);
                background-position: 100% 50%;
                background-repeat: no-repeat;
                span {
                    margin-right: (140 / @rem);
                    display: block;
                    color: #333333;
                    font-size: (32 / @rem);
                    line-height: (100 / @rem);
                }
                .mine_header_imgs {
                    width: (140 / @rem);
                    height: (100 / @rem);
                    display: block;
                    float: right;
                    img {
                        width: (100 / @rem);
                        height: (100 / @rem);
                        display: block;
                        border-radius: 100%;
                    }
                }
            }
        }
        .mine_datas {
            width: 100%;
            display: block;
            margin-top: (30 / @rem);
            li {
                padding: (30 / @rem) (30 / @rem);
                display: block;
                background: #ffffff;
                border-bottom: 1px solid #e1e1e1;
                .mine_datas_list {
                    height: (32 / @rem);
                    display: inline-block;
                    vertical-align: top;
                    span {
                        color: #333333;
                        font-size: (28 / @rem);
                        line-height: (32 / @rem);
                        display: inline-block;
                        padding: 0 (90 / @rem) 0 (50 / @rem);
                        position: relative;
                        &::before {
                            content: "";
                            width: (32 / @rem);
                            height: (29 / @rem);
                            display: block;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            background: url("@{url}/wname.png");
                            background-size: cover;
                            background-position: 0 0;
                        }
                    }
                }
                &:last-child {
                    border-bottom: none;
                    .mine_datas_list {
                        span {
                            &::before {
                                content: "";
                                width: (23 / @rem);
                                height: (32 / @rem);
                                display: block;
                                position: absolute;
                                top: 0px;
                                left: 1px;
                                background: url("@{url}/wshouji.png");
                                background-size: cover;
                                background-position: 0 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
