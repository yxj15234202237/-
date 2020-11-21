<template>
    <div class="index">
        <header>
            <div class="logo">
                <img src="/common/icon_logo.png" alt="">
                
            </div>
            <div class="">

            </div>
        </header>
        <div class="content"> 
            <div class="b">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
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
                    设计师
                    <span>包设计、包材料、包水电、包施工</span>
                </p>
                <div>
                    <p>
                        <button>换一换</button>
                        <button>更多设计师</button>
                    </p>
                </div>
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
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
            }
        },
        // methods: {
        //     //通用方法，这里直接找到公共图片文件夹
        //     imgurl (name){
        //         // 大家根据自己的路径，修改下边的写法
        //         return require('/'+name);
        //     }
        // }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    $borderColor : #39c894;
    $spanColor : #eaeaea;
    .index{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        header{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            .logo{
                width: 30%;
            }
        }
        .content{
            width: 100%;
            flex: 1;
            overflow: auto;
        }
    }
    .b{
        width: 100%;
    }
    .van-swipe img{
        width: 100%;
    }
    .allp{
        display: flex;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        align-items: center;
        span:nth-of-type(1){
            height: 20px;
            border-right: 2px solid $borderColor ;
            margin-right: 10px;
        }
        span:nth-of-type(2){
            color: $spanColor;
            margin-left: 10PX;
            font-size: 14PX;
        }
    }
</style>