<template>
  <div class="index">
    <header>
      <div class="logo">
        <img src="logo.png"/>
      </div>
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
    <div class="content">
      <div class="b">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in image" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="div">
        <router-link to="/falist" tag="dl">
          <dt>
            <img src="/common/images/2_03.jpg" alt="" />
          </dt>
          <dd>装修方案</dd>
        </router-link>
        <router-link to="/xiao" tag="dl">
          <dt><img src="/common/images/2_05.jpg" alt="" /></dt>
          <dd>效果图</dd>
        </router-link>
        <router-link to="/sjslist" tag="dl">
          <dt><img src="/common/images/2_07.jpg" alt="" /></dt>
          <dd>设计师</dd>
        </router-link>
        <router-link to="/gdzb" tag="dl">
          <dt><img src="/common/images/2_09.jpg" alt="" /></dt>
          <dd>工地直播</dd>
        </router-link>
        <router-link to="/zxgl" tag="dl">
          <dt>
            <img src="/common/images/2_15.jpg" alt="" />
          </dt>
          <dd>装修攻略</dd>
        </router-link>
        <router-link to="/zxdk" tag="dl">
          <dt><img src="/common/images/2_16.jpg" alt="" /></dt>
          <dd>装修贷款</dd>
        </router-link>
        <router-link to="/mfyy" tag="dl">
          <dt><img src="/common/images/2_17.jpg" alt="" /></dt>
          <dd>免费预约</dd>
        </router-link>
        <router-link to="/smbj" tag="dl">
          <dt><img src="/common/images/2_18.jpg" alt="" /></dt>
          <dd>十秒报价</dd>
        </router-link>
      </div>
      <div class="zhuangxiu">
        <p class="allp">
          <span></span>
          全屋装修
          <span>包设计、包材料、包水电、包施工</span>
        </p>
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="zhuangxiuyuyue">
        <p class="allp">
          <span></span>
          装修预约
          <span>包设计、包材料、包水电、包施工</span>
        </p>
        <div>
          <p><input type="text" placeholder="小区名" /></p>
          <p><input type="text" placeholder="手机号" /></p>
          <p><input type="text" placeholder="建筑面积" /></p>
          <p>
            <button>立即申请</button>
          </p>
        </div>
      </div>
      <div class="shejishi">
        <p class="allp">
          <span></span>
          设计师
          <span>包设计、包材料、包水电、包施工</span>
        </p>
        <div>
          <div>
            <dl>
              <dt><img src="" alt="" /></dt>
              <dd>
                <span> 邓建忠 </span>
              </dd>
            </dl>
            <dl>
              <dt><img src="" alt="" /></dt>
              <dd>
                <span> 马国辉 </span>
              </dd>
            </dl>
            <dl>
              <dt><img src="" alt="" /></dt>
              <dd>
                <span> 杜亚洲 </span>
              </dd>
            </dl>
            <dl>
              <dt><img src="" alt="" /></dt>
              <dd>
                <span> 崔钧婷 </span>
              </dd>
            </dl>
          </div>
        </div>
        <p>
          <button>换一换 <i class="iconfont icon-change"></i></button>
          <button>更多效果图 <i class="iconfont icon-more"></i></button>
        </p>
      </div>
      <div class="xiaogu">
        <p class="allp">
          <span></span>
          效果图
        </p>
        <div>
          <ul>
            <li>
              <img src="../../public/common/icon_logo.png" alt="" />
            </li>
            <li>
              <img src="../../public/common/icon_qzone.png" alt="" />
            </li>
            <li>
              <img src="../../public/common/icon_tx.png" alt="" />
            </li>
            <li>
              <img src="../../public/common/icon_weibo.png" />
            </li>
            <li>
              <img src="../../public/common/icon_logo.png" alt="" />
            </li>
          </ul>
          <p>
            <button>换一换 <i class="iconfont icon-change"></i></button>
            <button>更多效果图 <i class="iconfont icon-more"></i></button>
          </p>
        </div>
      </div>
      <div class="gongdizhibo">
        <p class="allp">
          <span></span>
          工地直播
        </p>
        <div>
          <div>
            <img src="../../public/common/icon_tx.png" alt="" />
            <p>
              <span>重气嘉泽7栋</span>
              <span>泥木工程</span>
            </p>
          </div>
          <p>
            <button>换一换 <i class="iconfont icon-change"></i></button>
            <button>更多效果图 <i class="iconfont icon-more"></i></button>
          </p>
        </div>
      </div>
      <div class="zhuangxiugonglue">
        <p class="allp">
          <span></span>
          装修攻略
        </p>
        <div>
          <dl>
            <dt>
              <img src="../../public/common/icon_logo.png" alt="" />
            </dt>
            <dd>
              <p>房子交付要验房，验房师是做什么得？</p>
              <p>
                <i class="iconfont icon-time"></i>
                <span>2016-07-07</span>
                <i class="iconfont icon-view"></i>
                <span>115</span>
              </p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../../public/common/icon_logo.png" alt="" />
            </dt>
            <dd>
              <p>房子交付要验房，验房师是做什么得？</p>
              <p>
                <i class="iconfont icon-time"></i>
                <span>2016-07-07</span>
                <i class="iconfont icon-view"></i>
                <span>115</span>
              </p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../../public/common/icon_logo.png" alt="" />
            </dt>
            <dd>
              <p>房子交付要验房，验房师是做什么得？</p>
              <p>
                <i class="iconfont icon-time"></i>
                <span>2016-07-07</span>
                <i class="iconfont icon-view"></i>
                <span>115</span>
              </p>
            </dd>
          </dl>
          <p>
            <button>换一换 <i class="iconfont icon-change"></i></button>
            <button>更多效果图 <i class="iconfont icon-more"></i></button>
          </p>
        </div>
      </div>
      <div class="p">
        <p>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整个设计师与项目经理，杜绝项目转外包
          利用互联网将工地进行在线全景直播，通过去中介环节， 提供装修套餐 +
          个性化定制服务
        </p>
      </div>
      <footer>
        <p>服务热线 : 400-9977-658</p>
        <ul>
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
        <img src="../../public/quoten_bottom.png" alt="" />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      image: ["/banner.jpg", "banner1.jpg", "banner2.jpg", "banner3.jpg"],
      images: ["img1.jpg", "banner3.jpg"],
    };
  },
  methods: {
  },
  // methods: {
  //     //通用方法，这里直接找到公共图片文件夹
  //     imgurl (name){
  //         // 大家根据自己的路径，修改下边的写法
  //         return require('/'+name);
  //     }
  // }
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
$borderColor: #39c894;
$spanColor: #eaeaea;
$buttonColor: #eed215;
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 50px;
    padding-top: 7px;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    .logo {
      width: 30%;
      img {
        width: 100%;
      }
    }
    &>ul{
      &>li{
        margin: 0 6px;
      }
    }
  }
  .div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    dl {
      width: 25%;
      text-align: center;
      padding: 10px 0;
      dt {
        width: 50%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
    }
  }
  .content {
    width: 100%;
    flex: 1;
    overflow: auto;
    background-color: $spanColor;

    & > div {
      margin: 15px 0;
      background-color: white;
      padding: 6px 10px;
    }
  }
}
.van-swipe-item {
  width: 100%;
  font-size: 0;

  & > img {
    height: 160px;
  }
}
.b {
  width: 100%;
}
.van-swipe img {
  width: 100%;
}
.allp {
  display: flex;
  height: 30px;
  line-height: 30px;
  align-items: center;

  span:nth-of-type(1) {
    height: 20px;
    border-right: 2px solid $borderColor;
    margin-right: 10px;
  }

  span:nth-of-type(2) {
    color: $spanColor;
    margin-left: 10px;
    font-size: 14px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.shejishi {
  width: 100%;
  & > div {
    width: 100%;
    & > div {
      width: 100%;
      display: flex;
      dl {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        dt {
          width: 100%;
          img {
            width: 100%;
          }
        }
        dd {
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
  & > p:nth-of-type(2) {
    display: flex;
    button {
      padding: 4px 0;
      border: 1px solid #cccccc;
      flex: 1;
      background-color: white;
      color: $borderColor;
    }
  }
}
.zhuangxiuyuyue {
  width: 100%;

  & > div {
    padding: 5px 20px 10px 20px;

    & > p {
      margin: 10px 0;

      & > input {
        width: 100%;
        padding: 4px 10px;
        border-radius: 5px;
      }

      & > button {
        width: 100%;
        background-color: $buttonColor;
        color: white;
        border-radius: 5px;
        padding: 6px 0;
        border: none;
      }
    }
  }
}
.xiaogu {
  & > div {
    & > ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li:nth-of-type(1) {
        width: 100%;
      }
      li {
        width: 49%;
        img {
          width: 80%;
        }
      }
    }
    & > p {
      display: flex;
      button {
        padding: 4px 0;
        border: 1px solid #cccccc;
        flex: 1;
        background-color: white;
        color: $borderColor;
      }
    }
  }
}
.gongdizhibo {
  width: 100%;
  & > div {
    width: 100%;
    margin: 10px 0;
    img {
      width: 100%;
    }
    p {
      margin: 10px 0;
      span:nth-of-type(1) {
        font-size: 14px;
      }
      span:nth-of-type(2) {
        font-size: 12px;
        color: white;
        background-color: $borderColor;
        padding: 2px;
        border-radius: 5px;
        margin-left: 8px;
      }
    }
    & > p {
      display: flex;
      button {
        padding: 4px 0;
        border: 1px solid #cccccc;
        flex: 1;
        background-color: white;
        color: $borderColor;
      }
    }
  }
}
.zhuangxiugonglue {
  & > div {
    width: 100%;
    & > dl {
      display: flex;
      padding: 20px 0;
      border-bottom: 1px solid #cccccc;
      dt {
        width: 28%;
        img {
          width: 80%;
        }
      }
      dd {
        width: 70%;
        & > p:nth-of-type(1) {
          font-size: 18px;
          margin-bottom: 10px;
        }
        & > p:nth-of-type(2) {
          color: #cccccc;
          span:nth-of-type(1) {
            margin-right: 20px;
          }
        }
      }
    }
    & > p {
      display: flex;
      button {
        padding: 4px 0;
        border: 1px solid #cccccc;
        flex: 1;
        background-color: white;
        color: $borderColor;
      }
    }
  }
}
.p {
  & > p {
    padding: 12px;
  }
}
footer {
  width: 100%;
  background-color: white;
  margin-top: 10px;
  text-align: center;
  padding: 18px 0;
  ul {
    display: flex;
    margin-top: 10px;
    li {
      flex: 1;
    }
  }
  img {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
}
</style>