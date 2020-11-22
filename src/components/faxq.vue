<template>
  <div class="faxq">
    <header class="header">
      <img src="/logo.png" alt class="logo" @click="$router.push('/index')" />
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
    <div class="cjt-conent">
      <div class="cjt-jztc">
        <dl>
          <dt>
            <img src="/case/case1.jpg" alt />
          </dt>
          <dd>
            <h2>699全包精装套餐</h2>
            <p class="price">
              价格：
              <span>￥699元/㎡</span>
            </p>
            <p class="yy">
              已预约：
              <span>221套</span>
            </p>
            <p class="fs">
              正式发售：
              <span>全包套餐火爆预约中</span>
            </p>
          </dd>
        </dl>
        <p>精装全包套餐，包设计/包主材/包施工/包监理。采用知名辅材，一线主材，工厂直供F2C模式</p>
      </div>
      <div class="cjt-con">
        <van-tabs>
          <van-tab title="套餐详情">
            <div class="bans">
              <!-- <ul class="cjt-uls3">
                <li class="lis1">
                  <p>工厂</p>
                  <i class="iconfont icon-building"></i>
                </li>
                <li class="lis2">
                  <div>
                    <h2>工厂直销</h2>
                    <p>房先森供应链 去中间环节</p>
                  </div>
                </li>
                <li class="lis3">
                  <p>消费者</p>
                  <i class="iconfont icon-building"></i>
                </li>
              </ul>-->
              <img src="/spex-05.jpg" alt />
              <img src="/spex-03.jpg" alt />
            </div>
          </van-tab>
          <van-tab title="配置清单" to="/faxqpz"></van-tab>
          <van-tab title="施工工艺"></van-tab>
          <van-tab title="服务流程"></van-tab>
        </van-tabs>
      </div>
      <div class="cjt-zh">
        <p>
          ————房先森互联网家装有别于传统装修公司与其他装修中
          介平台,以自营模式整合设计师与项目经理,杜绝项目转
          ,包外包,利用互联网将工地进行在线全景直播,通过去中
          间环节,提供装修套餐+个性化定制服务
        </p>
      </div>
      <div class="cjt-phone">
        <div class="phone">
          <p>
            <i class="iconfont icon-tel"></i>服务热线:400-9977-658
          </p>
        </div>
        <ul class="uls3">
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>
    <footer class="footer">
      <div class="cjt-msyy">
        <i class="iconfont icon-pencle">马上免费预约</i>
      </div>
      <p>Spex with</p>
    </footer>
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
html,
body,
.faxq {
  width: 100%;
  height: 100%;
}
.faxq {
  background: #eaeaea;
  display: flex;
  flex-direction: column;
}
// .faxq .header {
//   margin-bottom: 10px;
// }
.cjt-conent {
    padding-top: 10px;
  width: 100%;
  flex: 1;
  overflow: auto;
  .cjt-jztc {
    width: 100%;
    background: #ffffff;
    padding: 18px 8px;
    margin-bottom: 10px;
    p {
      margin-top: 10px;
      color: #333;
      line-height: 20px;
      font-size: 14px;
    }
    dl {
      width: 100%;
      display: flex;
      dt {
        width: 40%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        width: 60%;
        padding-left: 10px;
        h2 {
          font-size: 20px;
          color: #333333;
          margin-bottom: 14px;
        }
        p {
          color: #999999;
          font-size: 14px;
        }
        .price {
          margin-bottom: 10px;
          span {
            color: #ff4351;
            font-weight: bolder;
          }
        }
        .yy {
          margin-bottom: 14px;
          span {
            color: #333;
          }
        }
        .fs {
          span {
            color: #ff4351;
          }
        }
      }
    }
  }
  .cjt-con {
    width: 100%;
    padding: 0 6px;
    background: #fff;
    .bans {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .cjt-zh {
    width: 100%;
    background: #fff;
    padding: 4px;
    margin-bottom: 10px;
  }
}
.footer {
  position: relative;
  width: 100%;
  height: 85px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  .cjt-msyy {
    background: #ff4351;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    opacity: 0.9;
    i {
      font-size: 30px;
      color: #eaeaea;
    }
  }
  p {
    width: 100%;
    flex: 1;
    background: #333333;
    opacity: 0.9;
    color: #eaeaea;
    font-size: 12px;
    padding: 4px 0 0 4px;
  }
}
</style>