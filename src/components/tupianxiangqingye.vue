<template>
  <div class="box">
    <!--头部-->
    <header>
      <van-nav-bar title="欧美文化的抽象美感" left-text="" left-arrow>
        <template #right>
          <h6>
            <i class="iconfont icon-nav"></i>
            <p>导航</p>
          </h6>
        </template>
      </van-nav-bar>
    </header>
    <!--内容-->
    <div class="conent">
      <img src="/case/case1.jpg" alt="" />
      <ul>
      <li>厨房(1)</li>
      <li>卧室(3)</li>
      <li>客厅(2)</li>
      <li>卫生间(2)</li>
      <li>阳台(1)</li>
      <li>储物室(1)</li>
      </ul>
      <p>设计诠释：less is more 不需要过多的装饰</p>
      <h5>简单的墙面背景与简洁的家具即可组成一个温馨的家</h5>
    </div>
    <p>房先生互联网家具有别与别的互联网装修公司，与其他装修中介平台,以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全程直播，通过去中间环节，提供装修套餐+个性化定制化服务。</p>
    <h3><i class="iconfont icon-design"></i>预约免费设计</h3>
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
  display: flex;
  flex-direction: column;
  overflow: auto;
  & > header {
    width: 100%;
    & > .van-nav-bar {
      width: 100%;
    }
  }
  & > .conent {
    width: 100%;
    padding: 30px 0px;
    background-color: #202020;
     color: #fff;
    & > img {
      width: 100%;
    }
    &>ul{
        width: 100%;
        line-height: 80px;
        display: flex;
        justify-content:space-between;
        list-style: none;
        color: #39c894;
        font-size: 16px;
    }
    &>p{
        line-height: 30px;
       
    }
    &>h5{
        font-weight: 100;
        line-height: 30px;
        font-size: 20px;
    }
  }
  &>p{
      line-height: 40px;
      font-size: 20px;
      color: #000;
      text-indent: 80px;
      background-color: #fff;
      margin-top: 10px;
      padding: 20px 0px;
  }
  &>h3{
      width: 100%;
      line-height: 60px;
      font-size: 28px;
      background-color: #ff4351;
      text-align: center;
      &>i{
          font-size: 32px;
      }
  }
}
</style>