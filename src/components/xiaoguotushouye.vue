<template>
  <div class="box">
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
    display:flex;
    justify-content: space-around;
    & > .header_left {
      width: 40%;
    }
  }
}
</style>