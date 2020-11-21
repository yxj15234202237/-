<template>
  <div class="falist">
    <header class="header">
      <img src="/logo.png" alt class="logo" />
      <p class="cjt-zxfa">装修方案</p>
      <ul class="cjt-uls">
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
    <div class="cjt-content">
      <div class="cjt-bananer">
        <p class="cjt-jbzx">局部装修</p>
        <img src="/case/case.jpg" alt />
        <div class="cjt-ban">
          <ul class="cjt-uls2">
            <li class="cjt-lis1">
              <h2>399元/㎡半包装修套餐</h2>
              <p>
                特惠:
                <span>可选300元/㎡品牌主材包</span>
              </p>
            </li>
            <li class="cjt-lis2">
              <p>已预约295套</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cjt-content">
      <div class="cjt-bananer">
        <p class="cjt-jbzx">全屋装修</p>
        <img src="/case/case1.jpg" alt />
        <div class="cjt-ban">
          <ul class="cjt-uls2">
            <li class="cjt-lis1">
              <h2>699元/㎡全包精装套餐</h2>
              <p>
                正式发售:
                <span>全包套餐火爆预约中</span>
              </p>
            </li>
            <li class="cjt-lis2">
              <p>已预约221套</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cjt-nr">
      <p>
        房先森互联网家装有别于传统装修公司与其他装修中
        介平台,以自营模式整合设计师与项目经理,杜绝项目转
        ,包外包,利用互联网将工地进行在线全景直播,通过去中
        间环节,提供装修套餐+个性化定制服务
      </p>
    </div>
    <div class="cjt-phone">
        <div class="phone">
            <p><van-icon name="phone-o" />服务热线:400-9977-658</p>
        </div>
        <ul class="uls3">
            <li>触屏版</li>
            <li>触屏版</li>
            <li>触屏版</li>
            <li>触屏版</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "falist",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}
.falist{
    background: #eaeaea;
}
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  align-items: center;
  background: #ffffff;
}
.header > .logo {
  height: 70%;
  width: 128px;
}
.header > .cjt-zxfa {
  font-size: 20px;
  color: #333333;
}
.header > .cjt-uls {
  display: flex;
  list-style: none;
}
.header > .cjt-uls li {
  text-align: center;
  margin-left: 4px;
  color: #999999;
}
.header > .cjt-uls li i {
  width: 22px;
  height: 27px;
}
.header > .cjt-uls li p {
  font-size: 12px;
}
.cjt-content {
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
}
.cjt-content .cjt-bananer {
  width: 100%;
  position: relative;
  background: #ffffff;
}
.cjt-content .cjt-bananer img {
  width: 100%;
}
.cjt-content .cjt-bananer .cjt-jbzx {
  background: #39c894;
  padding: 4px;
  border-radius: 4px;
  color: #eaeaea;
  font-size: 18px;
  position: absolute;
  left: -8px;
  top: 14;
}
.cjt-content .cjt-bananer .cjt-ban {
  width: 100%;
  padding: 15px 0 18px 17px;
}
.cjt-content .cjt-bananer .cjt-ban .cjt-uls2 {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.cjt-content .cjt-bananer .cjt-ban .cjt-uls2 .cjt-lis1 h2 {
  font-size: 18px;
  color: #333;
  font-style: inherit;
}
.cjt-content .cjt-bananer .cjt-ban .cjt-uls2 .cjt-lis1 p {
  font-size: 16px;
  color: #999999;
  margin-top: 15px;
}
.cjt-content .cjt-bananer .cjt-ban .cjt-uls2 .cjt-lis1 p span {
  color: #ff4351;
}
.cjt-content .cjt-bananer .cjt-ban .cjt-uls2 .cjt-lis2 {
  background: #ff4351;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  height: 50px;
  line-height: 50px;
}
.cjt-content .cjt-bananer .cjt-ban .cjt-uls2 .cjt-lis2 p {
  font-size: 14px;
  color: #eaeaea;
  padding-left: 14px;
}
.cjt-nr{
    width: 100%;
    background: #fff;
    margin-top: 10px;
    padding: 16px 10px;
    color: #666;
}
.cjt-phone{
    padding-top: 10px;
    background: #fff;
    width: 100%;
    .phone{
        width: 100%;
        text-align: center;
    }
    &>.uls3{
        width: 100%;
        display: flex;
        list-style: none;
        justify-content: space-evenly;
    }
}
</style>