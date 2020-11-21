<template>
  <div class="box">
  <!--头部-->
    <header>
      <div class="heaader_left">
      <img src="/logo.png" alt="">
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
       <span>216516</span>
       <van-icon name="arrow-up" />
       </li>
     
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  & > header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #999;
    & > .header_left {
      width: 30%;
      & > img {
        width: 100%;
      }
    }
    & > h1 {
      font-weight: 100;
    }
  }
  ul{
    width: 100%;
    height: 100px;
  }
}
</style>