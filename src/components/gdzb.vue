<template>
    <div>
         <ul>
            <li>
                筛选<span></span>
            </li>
            <li>
                阶段<span></span>
            </li>
            <li>
                排序<span></span>
            </li>
            <li>
                <i class="iconfont icon-search"></i>
            </li>
        </ul>
        <div class="dyzbox1">
            <dl>
                <dt></dt>
                <dd>
                    <p>戈雅公寓24幢</p>
                    <span>泥木工程</span>
                    <p>
                        <span>三室</span>
                        <span></span>
                        <span></span>
                    </p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
$green1:#39c894;
$green2:#2bb281;
$gray1:#999999;
$gray2:#666666;
$black1:#eaeaea;
$black:#333333;
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.dyzbox{
    widows: 100%;
    height:100%;
    ul{
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        border-top:1px solid $black1;
        border-bottom:1px solid $black1;
        li{
            flex:1;
            text-align: center;
            height:50px;
            line-height: 50px;
            span{
                display:inline-block;
                width:8px;
                height:8px;
                border:1px solid transparent;
                border-left:1px solid $gray1;
                border-bottom:1px solid $gray1;
                transform: rotate(-45deg);
                margin-left:10px;
                margin-bottom:4px;
            }
            i{
                font-size:26px;
                color:$green2;
            }
        }
    }
}
.dyzbox1{
    width:100%;
    dl{
        padding:10px 2px;
        display:flex;
        dt{
            width:280px;
            height:195px;
            background:$green1;
            margin-right:25px;
        }
        dd{
            
        }

    }
}
</style>