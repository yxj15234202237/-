<template>
  <div class="hxl-big">
    <header>
      <p class="p1">
        <img src="/logo.png" alt @click="$router.push('/index')" />
      </p>
      <p>业主评价</p>
      <ul>
        <li>
          <i class="iconfont icon-nav"></i>
          <p>导航</p>
        </li>
      </ul>
    </header>
    <div class="hxl-content">
      <section>
        <p class="hxl-p1">
          <span class="hxl-sp1">
            <i class="iconfont icon-user"></i>
          </span>
          <span class="hxl-sp2">x*n</span>
          <span class="hxl-sp3">2016-05-19</span>
        </p>
        <p class="hxl-p2">这篇文章很实用，正在装修，刚好可以用来参考一下。</p>
      </section>
      <section>
        <p class="hxl-p1">
          <span class="hxl-sp1">
            <i class="iconfont icon-user"></i>
          </span>
          <span class="hxl-sp2">z*0</span>
          <span class="hxl-sp3">2016-04-11</span>
        </p>
        <p class="hxl-p2">喜欢这篇文章很实用。</p>
      </section>
      <section>
        <p class="hxl-p1">
          <span class="hxl-sp1">
            <i class="iconfont icon-user"></i>
          </span>
          <span class="hxl-sp2">h*5</span>
          <span class="hxl-sp3">2016-05-19</span>
        </p>
        <p class="hxl-p2">这个设计师为人很随和，很喜欢他。画图页很仔细，暂时就这些。</p>
      </section>
      <section>
        <p class="hxl-p1">
          <span class="hxl-sp1">
            <i class="iconfont icon-user"></i>
          </span>
          <span class="hxl-sp2">x*n</span>
          <span class="hxl-sp3">2016-05-19</span>
        </p>
        <p class="hxl-p2">设计风格简约大气，人很热情，沟通很耐心，吉利推荐。</p>
      </section>
      <section>
        <p class="hxl-p1">
          <span class="hxl-sp1">
            <i class="iconfont icon-user"></i>
          </span>
          <span class="hxl-sp2">x*n</span>
          <span class="hxl-sp3">2016-05-19</span>
        </p>
        <p class="hxl-p2">空间利用合理，设计风格很喜欢。</p>
      </section>
      <section>
        <p class="hxl-p1">
          <span class="hxl-sp1">
            <i class="iconfont icon-user"></i>
          </span>
          <span class="hxl-sp2">x*n</span>
          <span class="hxl-sp3">2016-05-19</span>
        </p>
        <p class="hxl-p2">这个设计师为人很随和，很喜欢他。画图也很仔细，暂时就这些。</p>
      </section>
      <div class="hxl-uu">
        <ul class="hxl-u1">
          <li class="hxl-sx">上一页</li>
          <li>2/30</li>
          <li class="hxl-sx">下一页</li>
        </ul>
      </div>

      <div class="hxl-zi">
        房先森互联网家装有别于传统装修公司与其他装修中
        介平台，以自营模式整合设计师与项目经理，
        杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过中间
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
    <p class="hxl-xg"><i class="iconfont icon-pencle"></i></p>
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
  border-bottom: 1px solid #eaeaea;
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
    // li {
    //   text-align: center;
    //   color: #999;
    //   margin-left: 20px;
    //   font-size: 10px;
    // }
  }
}
.hxl-content {
  flex: 1;
  width: 100%;
  overflow: auto;

  //   background: #fff;
}
section {
  border-bottom: 1px solid #eaeaea;
  padding: 18px 8px;
  //   padding: 0 8px;
  background: #fff;
  .hxl-p1 {
    display: flex;
    align-items: center;
    .hxl-sp1 {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #dcdcdc;
      text-align: center;
      line-height: 30px;
      i {
        color: #fff;
        font-size: 19px;
      }
    }
    .hxl-sp2 {
      color: #37c993;
      font-size: 14px;
      margin-left: 10px;
    }
    .hxl-sp3 {
      color: #999;
      font-size: 14px;
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
  }
  .hxl-p2 {
    font-size: 17px;
    margin-top: 15px;
  }
}
.hxl-u1 {
  border: 1px solid #eaeaea;
  display: flex;
//   margin: 10px 0;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    padding: 11px 0;
  }
  .hxl-sx {
    background: #37c993;
    color: #fff;
  }
}
.hxl-uu{
    padding: 10px 0;
    background: #fff;
}
.hxl-zi{
    padding:19px 10px;
    background: #fff;
    margin: 10px 0;
}
.hxl-xg{
    width:47px;
    height: 47px;
    border-radius: 50%;
    background: #1b9bf7;
    text-align: center;
    line-height: 47px;
    box-shadow: 6px 0 6px 20%;
    position: fixed;
    bottom: 150px;
    right: 10px;
    i{
        color: #fff;
        font-size: 23px;
    } 
}
</style>