<template>
  <div class="dyzbox">
    <header class="dyzheader">
      <img src="/logo.png" alt class="logo" />
      <p class="dyz-gdzb">工地直播</p>
      <ul class="dyz-uls">
        <li>
          <i class="iconfont icon-user"></i>
          <p>我的</p>
        </li>
        <li>
          <i class="iconfont icon-nav"></i>
          <p>导航</p>
        </li>
      </ul>
    </header>
    <ul class="dyzul">
      <li>
        筛选
        <span></span>
      </li>
      <li>
        阶段
        <span></span>
      </li>
      <li>
        排序
        <span></span>
      </li>
      <li>
        <i class="iconfont icon-search"></i>
      </li>
    </ul>
    <div class="dyzbox1">
      <dl>
        <dt>
          <img src="/common/images/1_03.jpg" alt="">
        </dt>
        <dd>
          <p>戈雅公寓24幢</p>
          <span class="dyznt">泥木工程</span>
          <p>
            <span>三室</span>
            <span>60-90m<sup>2</sup></span>
            <i class="iconfont icon-location"></i>
            <span>10KM</span>
          </p>
        </dd>
      </dl>
       <dl>
        <dt><img src="/common/images/1_03.jpg" alt=""></dt>
        <dd>
          <p>观澜时代国际花园云邸5幢</p>
          <span class="dyznt">泥木工程</span>
          <p>
            <span>三室</span>
            <span>60-90m<sup>2</sup></span>
            <i class="iconfont icon-location"></i>
            <span>20KM</span>
          </p>
        </dd>
      </dl>
       <dl>
        <dt><img src="/common/images/1_03.jpg" alt=""></dt>
        <dd>
          <p>中泰阳光城5幢</p>
          <span class="dyznt">水电工程</span>
          <p>
            <span>三室</span>
            <span>60-90m<sup>2</sup></span>
            <i class="iconfont icon-location"></i>
            <span>未定位</span>
          </p>
        </dd>
      </dl>
       <dl>
        <dt><img src="/common/images/1_03.jpg" alt=""></dt>
        <dd>
          <p>重汽嘉泽5幢</p>
          <span class="dyznt">水电工程</span>
          <p>
            <span>三室</span>
            <span>60-90m<sup>2</sup></span>
            <i class="iconfont icon-location"></i>
            <span>20KM</span>
          </p>
        </dd>
      </dl>
       <dl>
        <dt><img src="/common/images/1_03.jpg" alt=""></dt>
        <dd>
          <p>戈雅公寓24幢</p>
          <span class="dyznt">泥木工程</span>
          <p>
            <span>三室</span>
            <span>60-90m<sup>2</sup></span>
            <i class="iconfont icon-location"></i>
            <span>10KM</span>
          </p>
        </dd>
      </dl>
      <dl>
        <dt><img src="/common/images/1_03.jpg" alt=""></dt>
        <dd>
          <p>戈雅公寓24幢</p>
          <span class="dyznt">泥木工程</span>
          <p>
            <span>三室</span>
            <span>60-90m<sup>2</sup></span>
            <i class="iconfont icon-location"></i>
            <span>10KM</span>
          </p>
        </dd>
      </dl>
      <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
      <section class="dyzfoot">
        <p>
          <i class="iconfont icon-hot-line"></i>
          服务热线：400-9977-658</p>
          <ul>
            <li>触屏版</li>
            <li>电脑版</li>
            <li>关于我们</li>
            <li>联系我们</li>
          </ul>
          <p>2016  sirfang.com  刚需房装修就找房先森</p>
      </section>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" >
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
html,body,.dyzbox{
  width:100%;
  height:100%;
}
.dyzheader {
  width: 100%;
  height: 60px;
  background: #ffffff;
  position: relative;
}
.dyzheader > .logo {
  height: 70%;
  width: 128px;
  position:absolute;
  top:5px;
  left:2px;
}
.dyzheader > .dyz-gdzb {
  text-align: center;
  font-size: 20px;
  color: #333333;
  // margin-left:-50px;
}
.dyzheader > .dyz-uls {
  position: absolute;
  display: flex;
  list-style: none;
  right:10px;
  top:12px;
}
.dyzheader > .dyz-uls li {
  text-align: center;
  margin-left: 4px;
}
.dyzheader > .dyz-uls li i {
  width: 22px;
  height: 27px;
}
.dyzheader > .dyz-uls li p {
  font-size: 12px;
}
.dyzbox{
    widows: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .dyzul{
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        border-top:1px solid $black1;
        border-bottom:1px solid $black1;
        background: #ffffff;
        height:50px;
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
    flex:1;
    background: #ffffff;
    overflow: auto;
    dl{
        padding:10px 5px;
        display:flex;
        border-bottom:1px solid $black1;
        dt{
            width:140px;
            height:90px;
            // background:$green1;
            margin-right:10px;
            img{
              width:100%;
              height:100%;
            }
        }
        dd{
          font-size:12px;
          p:nth-of-type(1) {
            font-size:18px;
            margin-bottom:12px;
          }
          .dyznt{
            display: inline-block;
            padding:1px 4px;
            background: $green2;
            border-radius: 3px;
            color:#fff;
            margin-bottom:13px;
          }
          p:nth-of-type(2){
            color:$gray1;
            span:nth-of-type(1){
              margin-right:40px;
            }
            span:nth-of-type(2){
              margin-right:40px;
            }
          }
        }

    }
}
sup{
  font-size:10px;
}
.dyzfoot{
  width:100%;
  border-top:20px solid $black1;
  padding-top:10px;
  p:nth-of-type(1){
    text-align: center;
    color:$gray1;
    i{
      color:$green2;
    }
  }
  ul{
    margin-top:10px;
    margin-bottom:10px;
    display: flex;
    justify-content: space-around;
    color:$gray2;
    font-size:14px;
    padding-bottom:10px;
    border-bottom:1px solid $black1;
  }
  p:nth-of-type(2){
    text-align: center;
    color:$gray1;
    font-size:12px;
  }
}
</style>