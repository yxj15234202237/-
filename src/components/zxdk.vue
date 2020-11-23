<template>
  <div class="hxl-big">
    <header>
      <p class="p1">
        <img src="/logo.png" alt />
      </p>
      <p>装修报价</p>
      <ul>
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
    <div class="hxl-content">
      <p class="banner"></p>
      <div class="box1">
        <p class="p2">申请房先森装修款</p>
        <section class="sec1">
          <p class="h"></p>
          <span class="sp1"></span>
          <p class="h"></p>
        </section>
        <section class="sec2">
          <input type="text" name id placeholder="电话" class="inp" />
          <input type="text" name id placeholder="小区" class="inp" />
          <input type="text" name id placeholder="建筑面积" class="inp" />
          <button class="btn1">立即申请</button>
        </section>
        <section class="sec3">
          <p class="s"></p>
          <span class="hxl-zx">什么是装修贷款</span>
          <p class="s"></p>
        </section>
        <div class="box2">
          <p class="zj">
            装修贷款是无担保个人信用贷款，是房先森装修和建行共同为
            准备装修的工薪人士发放的个人信用贷款，用于房屋装修相关的支
            出。
            <span
              class="hxl-lv"
            >无需担保，无需抵押,</span>以个人信誉度作为判断依据，
            <span class="hxl-lv">最高可贷50万。</span>
          </p>
        </div>
        <div class="box3">
          <p class="wm">申请流程</p>
          <section class="ss">
            <p class="xian"></p>
            <span class="tu"></span>
            <p class="xian"></p>
          </section>
          <div class="box4">
            <ul class="u1">
              <li>
                <p class="hxl-icon">
                  <i class="iconfont icon-pencle"></i>
                </p>
                <p>01</p>
                <p>在线预约</p>
              </li>
              <li>
                <p class="hxl-icon">
                  <i class="iconfont icon-audit"></i>
                </p>
                <p>02</p>
                <p>银行评估初审</p>
              </li>
              <li>
                <p class="hxl-icon">
                  <i class="iconfont icon-loans"></i>
                </p>
                <p>03</p>
                <p>提交材料</p>
              </li>
            </ul>
          </div>
          <div>
            <p class="wm">申请条件</p>
            <section class="ss">
              <p class="xian"></p>
              <span class="tu"></span>
              <p class="xian"></p>
            </section>
            <ul class="u2">
                <li class="l1">
                    <p class="hxl-icon2"><i class="iconfont icon-social-security"></i></p>
                    <p class="hxl-sb">社保缴纳记录</p>
                </li>
                <li>
                    <p class="hxl-icon2"><i class="iconfont icon-document"></i></p>
                    <p class="hxl-sb">购房资料或房产证</p>
                </li>
                <li class="l1">
                    <p class="hxl-icon2"><i class="iconfont icon-building"></i></p>
                    <p class="hxl-sb">房管局拉房产证明</p>
                </li>
                <li>
                    <p class="hxl-icon2"><i class="iconfont icon-bank"></i></p>
                    <p class="hxl-sb">没有银行违约的信用记录</p>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hxl-bottom">
        <p class="hxl-vs"></p>
      </div>
    <div  @click="$router.push('/index')">
        装修贷款
    </div>
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

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.hxl-big {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .p1 {
    width: 107px;
    height: 36px;
    position: absolute;
    top: 8px;
    left: 9px;
    img {
      width: 100%;
    }
  }
  ul {
    display: flex;
    list-style: none;
    position: absolute;
    right: 9px;
    li {
      text-align: center;
      color: #999;
      margin-left: 20px;
      font-size: 10px;
    }
  }
}
.hxl-content {
  flex: 1;
  width: 100%;
  overflow: auto;
}
.banner {
  width: 100%;
  height: 125px;
  background: url(/loans/loans.jpg);
  background-size: 100% 100%;
}
.box1 {
  padding: 0 9px;
  background: #fff;
  margin-bottom: 9px;
  padding-bottom: 12px;
  .p2 {
    font-size: 18px;
    text-align: center;
    padding-top: 18px;
  }
  .sec1 {
    display: flex;
    align-items: center;
    padding: 18px 0;
  }
  .h {
    width: 147px;
    border-top: 1px solid #eaeaea;
  }
  .sp1 {
    display: inline-block;
    margin: 0 13px;
    width: 37px;
    height: 13px;
    background: url(/common/icon_title.png);
    background-size: 100% 100%;
  }
}
.sec2 {
  text-align: center;
  padding: 0 32px;
}
.inp {
  width: 293px;
  height: 35px;
  margin-bottom: 10px;
}
.btn1 {
  background: #feb605;
  border: none;
  width: 293px;
  height: 35px;
  color: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
.sec3 {
  display: flex;
  align-items: center;
  border-top: 0;
  .s {
    width: 120px;
    border-top: 1px dashed #37c993;
  }
  
}
.box2 {
  //   text-align: center;
  border: 1px dashed #37c993;
  border-top: 0;
  padding: 15px 2px 4px 2px;
  transform: translate(0, -11%);
  .zj {
    color: #666666;
    font-size: 13px;
    // margin-top: 18px;
    .qian1 {
      color: #ff4351;
    }
  }
  .xz {
    font-size: 13px;
    margin: 25px 0 18px 0;
  }
  .tc {
    font-size: 13px;
    color: #666666;
    .qian2 {
      color: #eed215;
    }
  }
}
.hxl-lv {
  color: #37c993;
}
.box3 {
  padding: 0 5px;
  background: #fff;
  margin-bottom: 9px;
  padding-bottom: 12px;
  .ss {
    display: flex;
    align-items: center;
    padding: 18px 0;
  }
  .tu {
    display: inline-block;
    margin: 0 13px;
    width: 37px;
    height: 13px;
    background: url(/common/icon_title.png);
    background-size: 100% 100%;
  }
  .xian {
    width: 147px;
    border-top: 1px solid #eaeaea;
  }
  .wm {
    font-size: 18px;
    text-align: center;
    // padding-top: 18px;
  }
}
.u1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  li {
    width: 32%;
    border: 1px solid #37c993;
    padding: 20px 5px;
    text-align: center;
    .hxl-icon {
      width: 50px;
      height: 50px;
      border: 1px solid #37c993;
      border-radius: 50%;
      line-height: 50px;
      margin: 0 0 15px 25px;

      i {
        font-size: 26px;
        color: #37c993;
      }
    }
  }
}
.u2{
    display: flex;
    flex-wrap: wrap;
    li{
        width: 49%;
        text-align: center;
        padding: 20px 0;
        border-bottom: 1px solid #eaeaea; 
        .hxl-icon2{
            width: 50px;
            height: 50px;
            border: 1px solid #37c993;
            border-radius: 50%;
            background: #37c993;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 60px;
            margin-bottom: 8px;
            i{
                font-size: 25px;
                color: #fff;
            }
        }
    }
}
.l1{
    border-right: 1px solid #eaeaea;
}
.hxl-sb{
  font-size: 14px;
}
</style>