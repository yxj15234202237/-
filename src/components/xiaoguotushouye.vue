<template>
  <div class="box">
    <!--头部-->
    <header>
      <div class="heaader_left">
        <img src="/logo.png" alt=""  @click="$router.push('/index')"/>
      </div>
      <h1>效果图</h1>
      <van-grid>
        <van-grid-item icon="manager-o" text="我的" />
        <van-grid-item icon="wap-nav" text="导航" />
      </van-grid>
    </header>
    <!--导航-->
    <ul>
      <li>
        <span>房型</span>
        <i class="iconfont icon-down"></i>
      </li>
      <li>
        <span>区域</span>
        <i class="iconfont icon-down"></i>
      </li>
      <li>
        <span>风格</span>
        <i class="iconfont icon-down"></i>
      </li>
      <li>
        <i
          class="iconfont icon-search"
          style="color: #39c894; fontSize: 25px"
        ></i>
      </li>
    </ul>
    <!--整体内容-->
    <ol>
      <li>
        <img src="/case/case1.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/case/case.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/banner2.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/case/case1.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/banner2.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/case/case.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/case/case1.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/case/case.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/banner2.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/case/case.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/case/case1.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
      <li>
        <img src="/banner2.jpg" alt="" />
        <p>欧美文化的抽象美感</p>
        <span>混搭</span>
        <span>三室</span>
        <span>1100元/㎡</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  //头部
  & > header {
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #999;
    & > .heaader_left {
      width: 35%;
      & > img {
        width: 100%;
      }
    }
    & > h1 {
      font-weight: 100;
    }
  }
  //导航
  ul {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 10px;
    & > li {
      width: 20%;
      line-height: 50px;
      font-size: 20px;
      & > i {
        margin-left: 10px;
        color: #999;
      }
    }
  }
//内容
ol{
  width: 100%;
  background-color: #999;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 12px;
  &>li{
    width: 47%;
    height: 160px;
    font-size: 18px;
    background-color: #fff;
    text-align: center;
    margin-bottom: 10px;
    &>img{
      width: 100%;
      height: 100px;
    }
    &>span{
     font-size: 14px;
     color: #999;
     margin:5px 6px;
    }
  }
}
}
</style>