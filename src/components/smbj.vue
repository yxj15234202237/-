<template>
  <div>
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
    <div class="content">
      <p class="banner"></p>
      <div class="box1">
        <p class="p2">房先森</p>
        <section class="sec1">
          <p class="h"></p>
          <span class="sp1"></span>
          <p class="h"></p>
        </section>
        <section class="sec2">
          <input type="text" name id placeholder="请填写建筑面积" class="inp" />
          <br />
          <br />
          <select name id class="sel1">
            <option value="现代">现代</option>
          </select>
          <br />
          <br />
          <select name id class="sel2 left">
            <option value="1室">1室</option>
          </select>
          <select name id class="sel2">
            <option value="1厅">1厅</option>
          </select>
          <br />
          <br />
          <select name id class="sel3">
            <option value="1厨">1厨</option>
          </select>
          <select name id class="sel3">
            <option value="1卫">1卫</option>
          </select>
          <select name id class="sel3">
            <option value="1阳台">1阳台</option>
          </select>
          <button class="btn1">立即申请</button>
        </section>
        <section class="sec3">
          <p class="g"></p>
          <span class="zx">装修报价</span>
          <p class="g"></p>
        </section>
        <div class="box2">
          <p class="zj">
            全包装修总价：
            <span class="qian1">81,889,78</span>元
          </p>
          <p class="xz">您还可以选择</p>
          <p class="tc">
            房先森装修半包套餐价，
            <span class="qian2">399</span>元/平米
          </p>
          <button class="btn2">预约399套餐</button>
        </div>
      </div>
      <div class="box3">
        <p class="wm">我们可以为您提供</p>
        <section class="ss">
          <p class="xian"></p>
          <span class="tu"></span>
          <p class="xian"></p>
        </section>
        <div class="dd">
            <dl>
                <dt></dt>
                <dd></dd>
            </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "smbj",
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
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
}
header {
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
.content {
  flex: 1;
  width: 100%;
  overflow: auto;
  .banner {
    width: 100%;
    height: 125px;
    background: url(/10quoted.jpg);
    background-size: 100% 100%;
  }
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
.inp {
  width: 293px;
  height: 35px;
}
.sel1 {
  width: 293px;
  height: 35px;
  margin: 10px 0;
}
.sel2 {
  width: 141px;
  height: 35px;
  margin-bottom: 10px;
}
.sel3 {
  width: 94px;
  height: 35px;
}
.left {
  margin-right: 10px;
}
.sec2 {
  text-align: center;
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.sec3 {
  display: flex;
  align-items: center;
  // padding: 0 30px 13px 30px;
  // border: 1px dashed #37c993;
  border-top: 0;
  .g {
    width: 132px;
    border-top: 1px dashed #37c993;
  }
  .zx {
    margin: 0 13px;
  }
}
.btn1 {
  background: #feb605;
  border: none;
  width: 293px;
  height: 35px;
  color: #fff;
  border-radius: 3px;
  margin: 18px 0;
}
.box2 {
  text-align: center;
  border: 1px dashed #37c993;
  border-top: 0;
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
  .btn2 {
    background: #fff;
    border: none;
    width: 293px;
    height: 35px;
    color: #39c894;
    border: 1px solid #37c993;
    border-radius: 3px;
    margin: 18px 0 13px 0;
    color: #37c993;
  }
}
.box3 {
  padding: 0 9px;
  background: #fff;
  margin-bottom: 9px;
  padding-bottom: 12px;
  .ss {
    display: flex;
    align-items: center;
    padding: 18px 0;
  }
  .tu{
      display: inline-block;
    margin: 0 13px;
    width: 37px;
    height: 13px;
    background: url(/common/icon_title.png);
    background-size: 100% 100%;
  }
  .xian{
      width: 147px;
    border-top: 1px solid #eaeaea;
  }
  .wm {
    font-size: 18px;
    text-align: center;
    padding-top: 18px;
  }
}
</style>