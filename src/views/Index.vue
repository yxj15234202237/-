<template>
    <div class="index">
        <header>
            <div class="logo">
                <img src="logo.png" alt="" @click="zhuan">
            </div>
            <div class="">

            </div>
        </header>
        <div class="content"> 
            <div class="b">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in image" :key="index">
                        <img v-lazy="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="div">
                <van-grid :column-num="4">
                    <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </div>
            <div class="zhuangxiu">
                <p class="allp">
                    <span></span>
                    全屋装修
                    <span>包设计、包材料、包水电、包施工</span>
                </p>
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img v-lazy="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="zhuangxiuyuyue">
                <p class="allp">
                    <span></span>
                    装修预约
                    <span>包设计、包材料、包水电、包施工</span>
                </p>
                <div>
                    <p><input type="text" placeholder="小区名"></p>
                    <p><input type="text" placeholder="手机号"></p>
                    <p><input type="text" placeholder="建筑面积"></p>
                    <p>
                        <button>立即申请</button>
                    </p>
                </div>
            </div>
            <div class="shejishi">
                <p class="allp">
                    <span></span>
                    <router-link to="/faxq">设计师</router-link>
                    <span>包设计、包材料、包水电、包施工</span>
                </p>
                <div>
                    <div>
                        <dl>
                            <dt><img src="" alt=""></dt>
                            <dd>
                            <span>
                                邓建忠
                            </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="" alt=""></dt>
                            <dd>
                            <span>
                                马国辉
                            </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="" alt=""></dt>
                            <dd>
                            <span>
                                杜亚洲
                            </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="" alt=""></dt>
                            <dd>
                            <span>
                                崔钧婷
                            </span>
                            </dd>
                        </dl>
                    </div>
                </div>
                <p>
                    <button>换一换</button>
                    <button>更多设计师</button>
                </p>
            </div>
        </div>
        <footer>

        </footer>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {
                image: [
                    '/banner.jpg' ,
                    'banner1.jpg' ,
                    'banner2.jpg' ,
                    'banner3.jpg' ,
                ] ,
                images: [
                    'img1.jpg' ,
                    'banner3.jpg' ,
                ] ,
            }

        },
        methods:{
            zhuan(){
                this.$router.push("/gdzb")
            }
        }
        // methods: {
        //     //通用方法，这里直接找到公共图片文件夹
        //     imgurl (name){
        //         // 大家根据自己的路径，修改下边的写法
        //         return require('/'+name);
        //     }
        // }


    }
</script>

<style lang="scss" scoped>

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    $borderColor: #39c894;
    $spanColor: #eaeaea;
    $buttonColor: #eed215;

    .index {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        header {
            width: 100%;
            height: 50px;
            padding-top: 7px;
            display: flex;
            justify-content: space-between;
            padding-left: 10px;

            .logo {
                width: 30%;
                img {
                    width: 100%;
                }
            }
        }
        .content {
            width: 100%;
            flex: 1;
            overflow: auto;
            background-color: $spanColor;

            & > div {
                margin: 15px 0;
                background-color: white;
                padding: 6px 10px;
            }
        }
    }

    .van-swipe-item {
        width: 100%;
        font-size: 0;

        & > img {
            height: 160px;
        }
    }

    .b {
        width: 100%;
    }

    .van-swipe img {
        width: 100%;
    }

    .allp {
        display: flex;
        height: 30px;
        line-height: 30px;
        align-items: center;

        span:nth-of-type(1) {
            height: 20px;
            border-right: 2px solid $borderColor;
            margin-right: 10px;
        }

        span:nth-of-type(2) {
            color: $spanColor;
            margin-left: 10PX;
            font-size: 14PX;
        }
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        background-color: #39a9ed;
    }

    .shejishi {
        width: 100%;
        & > div {
            width: 100%;
            & > div {
                width: 100%;
                display: flex;
                dl {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    dt {
                        width: 100%;
                        img {
                            width: 100%;
                        }
                    }
                    dd {
                        span {
                            font-size: 12px;
                        }
                    }
                }

            }
        }
        &>p:nth-of-type(2){
            display: flex;
            button{
                padding: 4px 0;
                border: 1px solid #CCCCCC;
                flex: 1;
                background-color: white;
                color: $borderColor;
            }
        }
    }

    .zhuangxiuyuyue {
        width: 100%;

        & > div {
            padding: 5px 20px 10px 20px;

            & > p {
                margin: 10px 0;

                & > input {
                    width: 100%;
                    padding: 4px 10px;
                    border-radius: 5px;
                }

                & > button {
                    width: 100%;
                    background-color: $buttonColor;
                    color: white;
                    border-radius: 5px;
                    padding: 6px 0;
                    border: none;
                }
            }
        }
    }
</style>