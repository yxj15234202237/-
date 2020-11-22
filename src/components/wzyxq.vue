<template>
  <div class="box">
    <!--头部-->
    <header>
      <div class="heaader_left">
        <img src="/logo.png" alt="" />
      </div>
      <h1>装修预算</h1>
      <van-grid>
        <van-grid-item icon="wap-nav" text="导航" />
      </van-grid>
    </header>
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="/banner1.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="/banner3.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!--导航-->
    <ul>
      <li>房先生&nbsp;&nbsp;&nbsp;/</li>
      <li>装修攻略&nbsp;&nbsp;&nbsp;/</li>
      <li>装修预算&nbsp;&nbsp;&nbsp;/</li>
      <li>正文&nbsp;&nbsp;&nbsp;</li>
    </ul>
    <!--主内容-->
    <div class="banner">
      <h1>装修预算注意事项</h1>
      <p>
        <i class="iconfont icon-time"></i
        ><sapn>2016-07-09</sapn>
        <i class="iconfont icon-view"></i><sapn>115</sapn>
      </p>
    </div>
    <!--设计风格-->
    <ol>
    <li>餐厅装修隔断</li>
    <li>客厅装修图</li>
    <li>客厅装修效果</li>
    <li>客厅装修隔断</li>
    <li>客厅装修图</li>
    <li>客厅装修效果</li>
    </ol>
    <!--导语-->
    <p>导语：在装修时如果没有提前最好装修预算，很容易造成最后开支太大，添置更多没有必要的增项。那么在做预算的时候又有什么需要注意的地方呢。</p>
    <li></li>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: auto;
  //头部
  & > header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #999;
    & > .heaader_left {
      width: 40%;
      & > img {
        width: 100%;
      }
    }
    & > h1 {
      font-weight: 100;
    }
  }
  // 轮播图
  .van-swipe {
    width: 100%;
    .van-swipe__indicator--active {
      background-color: #39c894;
    }
    img {
      width: 100%;
    }
  }
  // 导航
  ul {
    width: 85%;
    line-height: 50px;
    margin: 10px auto;
    background-color: #eaeaea;
    border-radius: 5px;
    display: flex;
    li {
      list-style: none;
      margin-left: 8px;
      color: #000;
    }
  }
  .banner {
    width: 100%;
    height: 140px;
    text-align: center;
    border-bottom: 1px solid #999;
    h1 {
      line-height: 80px;
    }
    & > p {
        width: 100%;
        line-height: 30px;
      &>i {
        font-size: 20px;
        margin-left: 20px;
      }
    }
  }
  ol{
      width: 100%;
      display: flex;
      padding: 10px 0px;
      flex-wrap: wrap;
      &>li{
          width: 24%;
          text-align: center;
          line-height: 22px;
          font-size: 14px;
          background-color: #eaeaea;
          border-radius: 10px;
          margin-top: 10px;
          padding: 5px;
          margin-right: 4px;
      }
  }
  p{
      text-indent: 50px;
      font-size: 18px;
      line-height: 30px;
      color: #000;
      margin-bottom: 15px;
  }
}
</style>