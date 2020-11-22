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
            <dt>
              <p class="ic1">
                <i class="iconfont icon-app"></i>
              </p>
            </dt>
            <dd>
              <p class="hxl-cp">产品系列</p>
              <p class="hxl-qb">半包、全包套餐、全屋定制及个性化升级</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <p class="ic1">
                <i class="iconfont icon-price"></i>
              </p>
            </dt>
            <dd>
              <p class="hxl-cp">0元装修</p>
              <p class="hxl-qb">与建行合作装修贷款，实现0元开启装修</p>
            </dd>
          </dl>
          <dl class="hxl-zb">
            <dt>
              <p class="ic1">
                <i class="iconfont icon-live"></i>
              </p>
            </dt>
            <dd>
              <p class="hxl-cp">工地直播</p>
              <p class="hxl-qb">工地巡检照片、360度全景节点验收</p>
            </dd>
          </dl>
          <dl class="d3">
            <dt>
              <p class="ic1">
                <i class="iconfont icon-preferential"></i>
              </p>
            </dt>
            <dd>
              <p class="hxl-cp">合作优惠</p>
              <p class="hxl-qb">正品材料工厂直供，F2C让利用户</p>
            </dd>
          </dl>
          <dl class="d3">
            <dt>
              <p class="ic1">
                <i class="iconfont icon-construction-site"></i>
              </p>
            </dt>
            <dd>
              <p class="hxl-cp">参观工地</p>
              <p class="hxl-qb">随时预约参观工地，零距离感受施工工艺</p>
            </dd>
          </dl>
          <dl class="d3 hxl-zb">
            <dt>
              <p class="ic1">
                <i class="iconfont icon-protection"></i>
              </p>
            </dt>
            <dd>
              <p class="hxl-cp">售后保障</p>
              <p class="hxl-qb">整装2年质保，隐蔽水电工程10年质保</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="hxl-box4">
        &nbsp;房先森互联网家装有别于传统装修公司与其他装修中
        介平台，以自营模式整合设计师与项目经理，杜绝项目转
        包外包，利用互联网将工地进行在线全景直播，通过去中
        间环节，提供装修套餐+个性化定制服务。
      </div>
      <div class="hxl-box5">
        <p>
          <i class="iconfont icon-hot-line"></i>
          服务热线：400-9977-658
        </p>
        <ul>
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </div>
      <div class="hxl-box6">
        &copy;2016 sirfang.com 刚需房专修就找房先森
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
  padding-top: 15px;
  transform: translate(0, -6%);
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
    padding-top: 18px;
  }
}
.dd {
  padding-bottom: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  dl {
    width: 33%;
    text-align: center;
    padding: 8px 0 13px 0;
    border-right: 1px solid #eaeaea;
    dt {
      margin-bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      .ic1 {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #37c993;
        line-height: 50px;
        i {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .hxl-cp {
      font-size: 14px;
    }
    .hxl-qb {
      color: #666;
      font-size: 12px;
    }
    .d3 {
      border-top: 1px solid;
    }
  }
  .hxl-zb {
    border-right: none;
  }
  .d3 {
    border-top: 1px solid #eaeaea;
  }
}
.hxl-box4{
  background: #fff;
  font-size: 14px;
  padding: 10px;
  // text-align: center;
}
.hxl-box5{
  margin-top: 10px;
  background: #fff;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  padding: 12px 0;
  i{
    color: #37c993;
  }
  ul{
    display: flex;
    margin-top: 10px;
    li{
      flex: 1;
      border-right: 1px solid #eaeaea;
      text-align: center;
    }
    li:hover{
      color: #37c993;
    }
  }
}
.hxl-box6{
  text-align: center;
  background: #fff;
  padding: 10px 0;
  color: #999;
}
</style>