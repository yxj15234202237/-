<template>
  <div class="about">
    <!-- 头部 -->
    <header>
      <img src="/logo.png" alt="" />
      <p>业主评价</p>
      <span><i class="iconfont">&#xe601;</i></span>
    </header>
    <!-- 图 -->
    <div class="img">
      <img src="/banner3.jpg" alt="" />
    </div>
    <div class="jianjie">
      <p>房先森简介</p>
      <img src="/common/icon_title.png" alt="" />
      <div class="con">
        <p>123456789</p>
      </div>
    </div>
    <div class="dif">
      <p>我们是谁，我们如何与众不同？</p>
      <img src="/common/icon_title.png" alt="" />
    </div>
    <div class="liu">
      <img src="/2.png" alt="" />
    </div>
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
.evaluate {
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  img {
    width: 100px;
  }
  p {
    font-size: 20px;
  }
}
.img {
  width: 100%;
  img {
    width: 100%;
  }
}
.con {
  width: 100%;
  height: 30%;
  background-color: palegoldenrod;
  p {
    width: 100%;
    height: 40%;
    font-size: 26px;
  }
}
.liu {
  img {
    width: 100%;
  }
}
</style>