<template>
  <div class="zxgl" @click="$router.push('/index')">
    <!-- 头部+搜索 -->
    <div class="headerSearch">
      <div>
        <img src="../../public/erweima.jpg" alt="" />
        <img src="../../public/关注.png" alt="" />
        <p><span>关注房先森官方微信公众号</span><span>srifang_com</span></p>
        <span>X</span>
      </div>
      <p>
        <input type="text" name="" id="" placeholder="请输入关键字" />
        <input type="button" value="搜索" name="" id="" />
      </p>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <van-tabs v-model="active" color="#39c893">
        <van-tab title="装修前">
          <div>
            <dl>
              <dt><i class="iconfont icon-house"></i></dt>
              <dd><p>收房验房</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-budget"></i></dt>
              <dd><p>装修预算</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-taiji"></i></dt>
              <dd><p>装修风水</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-designer"></i></dt>
              <dd><p>装修设计</p></dd>
            </dl>
          </div>
          <p>了解装修流程</p>
        </van-tab>
        <van-tab title="装修中">
          <div>
            <dl>
              <dt><i class="iconfont icon-house"></i></dt>
              <dd><p>收房验房</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-budget"></i></dt>
              <dd><p>装修预算</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-taiji"></i></dt>
              <dd><p>装修风水</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-designer"></i></dt>
              <dd><p>装修设计</p></dd>
            </dl>
          </div>
          <p>了解装修流程</p>
        </van-tab>
        <van-tab title="装修后">
          <div>
            <dl>
              <dt><i class="iconfont icon-house"></i></dt>
              <dd><p>收房验房</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-budget"></i></dt>
              <dd><p>装修预算</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-taiji"></i></dt>
              <dd><p>装修风水</p></dd>
            </dl>
            <dl>
              <dt><i class="iconfont icon-designer"></i></dt>
              <dd><p>装修设计</p></dd>
            </dl>
          </div>
          <p>了解装修流程</p>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 为您推荐版块 -->
    <div class="recommend">
      <p>为您推荐</p>
      <dl>
        <dt><img src="../../public/2装修攻略_spec_03.jpg" alt="" /></dt>
        <dd>
          <p>开发商延期交房，业主如何维权呢？</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-07</span
            ><span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_06.jpg" alt="" /></dt>
        <dd>
          <p>能让您涨工资的家具居风水！</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-06</span>
            <span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_03.jpg" alt="" /></dt>
        <dd>
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-05</span
            ><span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_03.jpg" alt="" /></dt>
        <dd>
          <p>开发商延期交房，业主如何维权呢？</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-07</span
            ><span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_06.jpg" alt="" /></dt>
        <dd>
          <p>能让您涨工资的家具居风水！</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-06</span>
            <span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_03.jpg" alt="" /></dt>
        <dd>
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-05</span
            ><span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_03.jpg" alt="" /></dt>
        <dd>
          <p>开发商延期交房，业主如何维权呢？</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-07</span
            ><span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_06.jpg" alt="" /></dt>
        <dd>
          <p>能让您涨工资的家具居风水！</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-06</span>
            <span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_03.jpg" alt="" /></dt>
        <dd>
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-05</span
            ><span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <van-divider />
      <dl>
        <dt><img src="../../public/2装修攻略_spec_03.jpg" alt="" /></dt>
        <dd>
          <p>遇到有这样房子的男人就嫁了吧</p>
          <p>
            <span><i class="iconfont icon-time"></i> 2016-07-05</span
            ><span><i class="iconfont icon-view"></i>115</span>
          </p>
        </dd>
      </dl>
      <p>换一换 <i class="iconfont icon-change"></i></p>
    </div>
    <!-- 一堆废话 -->
    <div class="introduce">
      房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
    </div>
    <!-- 页面底部 -->
    <div class="footers">
      <p>
        <i class="iconfont icon-hot-line"></i>
        <span>服务热线：400-9977-658</span>
      </p>
      <ul>
        <li>触屏版</li>
        <li class="shu">|</li>
        <li>电脑版</li>
        <li class="shu">|</li>
        <li>关于我们</li>
        <li class="shu">|</li>
        <li>联系我们</li>
      </ul>
      <p>@ 2019 srifang.com 刚需房装修就找我</p>
    </div>
    <!-- 透明黑底部 -->
    <div class="footer">
      <img src="../../public/common/icon_close.png" alt="" />
      <!-- <img src="../../public/common/icon_logo.png" alt="" />
      <i>装修保报价，只需10秒</i>
      <i>免费为您算得装修预算</i> -->
      <img src="../../public/quoten_bottom.png" alt="" />
      <p>免费获取报价</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhuangxiugonglue",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,
body,
.zxgl {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
}
// @function rem($num) {
//   @return $num/100;
// }
.zxgl {
  //   头部 + 搜索
  & > .headerSearch {
    width: 100%;
    margin-bottom: 9px;
    & > div {
      width: 100%;
      height: 60px;
      background: #39c893;
      position: relative;
      display: flex;
      & > img:nth-of-type(1) {
        width: 56px;
        height: 56px;
        margin-top: 2px;
        margin-left: 20px;
      }
      & > img:nth-of-type(2) {
        margin-left: 15px;
        margin-top: 10px;
        width: 150px;
        height: 16px;
      }
      & > p {
        position: absolute;
        top: 35px;
        left: 90px;
        font-size: 12px;
        width: 242px;
        height: 20px;
        line-height: 20px;
        color: #fff;
        background: #2bb280;
        border-radius: 9px;
        text-indent: 7px;
        & > span:nth-child(1) {
          letter-spacing: 1px;
        }
        & > span:nth-child(2) {
          color: #edd415;
        }
      }
      & > span {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
    & > p {
      background: #fff;
      width: 100%;
      height: 50px;
      display: flex;
      padding: 1px 0 0 9px;
      & > input:nth-child(1) {
        width: 285px;
        height: 38px;
        border: 2px solid #39c894;
        text-indent: 5px;
        color: #aaa;
      }
      & > input:nth-child(2) {
        width: 69px;
        height: 38px;
        border: 0;
        background: #39c894;
        color: #fff;
      }
    }
  }
  //   导航
  .nav {
    width: 100%;
    height: 206px;
    background: #fff;
    margin-bottom: 9px;
    & > .van-tabs {
      & > .van-tabs__content {
        & > .van-tab__pane {
          & > div {
            width: 100%;
            display: flex;
            & > dl {
              width: 25%;
              text-align: center;
              position: relative;
              & > dt {
                width: 52px;
                height: 52px;
                border: 2px solid #39c893;
                border-radius: 100%;
                margin-top: 18px;
                margin-left: 20px;
                position: relative;
                & > i {
                  color: #2bb280;
                  font-size: 29px;
                  position: absolute;
                  top: 9px;
                  left: 9px;
                }
              }
              & > dd {
                margin-top: 10px;
              }
            }
          }
          & > p {
            width: 357px;
            height: 35px;
            text-align: center;
            line-height: 35px;
            border: #2bb280 1px solid;
            margin: 19px auto;
            border-radius: 5px;
            color: #2bb280;
            font-size: 13px;
          }
        }
      }
    }
  }
  //   为您推荐版块
  & > .recommend {
    width: 100%;
    background: #fff;
    padding: 8px;
    display: flex;
    flex-direction: column;
    margin-bottom: 9px;
    & > p:nth-child(1) {
      height: 21px;
      border-left: 5px solid #39c893;
      text-indent: 10px;
    }
    & > dl {
      display: flex;
      height: 88px;
      margin-top: 14px;
      //   border-bottom: 1px solid #f4f4f4;
      & > dt {
        margin-right: 11px;
        & > img {
          width: 94px;
          height: 72px;
        }
      }
      & > dd {
        position: relative;
        & > p:nth-child(2) {
          position: absolute;
          left: 0;
          bottom: 15px;
          color: #9a9a9a;
          & > span:nth-child(1) {
            margin-right: 40px;
          }
        }
      }
    }
    & > p:nth-of-type(2) {
      width: 100%;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border: 1px solid #eaeaea;
      border-radius: 3px;
      color: #37c993;
    }
  }
  //   一堆废话
  & > .introduce {
    letter-spacing: 1px;
    padding: 9px;
    width: 100%;
    height: 122px;
    background: #fff;
    font-size: 13px;
    line-height: 20px;
    text-indent: 30px;
    margin-bottom: 9px;
  }
  //   页面底部
  & > .footers {
    width: 100%;
    height: 118px;
    background: #fff;
    margin-bottom: 35px;
    & > p:nth-of-type(1) {
      text-align: center;
      line-height: 50px;
      & > i {
        color: #37c993;
      }
      & > span {
        font-size: 13px;
      }
    }
    & > ul {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      font-size: 13px;
      & > li:nth-of-type(1) {
        color: #37c993;
      }
      & > li.shu {
        color: #f4f4f4;
      }
    }
    & > p:nth-of-type(2) {
      text-align: center;
      line-height: 50px;
    }
  }
  //   透明黑底部
  & > .footer {
    background: rgba(0, 0, 0, 0.9);
    & > img:nth-of-type(1) {
      width: 25px;
      height: 25px;
    }
    & > img:nth-of-type(2) {
      width: 215px;
      height: 46px;
      position: relative;
      top: -19px;
      left: 38px;
    }
    & > p {
      width: 88px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background: #feb605;
      color: #fff;
      padding: 0;
      border-radius: 10px;
      position: absolute;
      top: 12px;
      right: 18px;
    }
    // & > img:nth-of-type(2) {
    //   width: 52px;
    //   height: 45px;
    //   position: relative;
    //   top: -19px;
    //   left: 38px;
    // }
    // & > i:nth-of-type(1) {
    //   position: absolute;
    //   color: #edd415;
    //   margin-left: 100px;
    //   margin-top: 9px;
    // }
    // & > i:nth-of-type(2) {
    //   position: absolute;
    //   color: #fff;
    //   margin-left: 85px;
    //   margin-top: 35px;
    // }
  }
}
</style>