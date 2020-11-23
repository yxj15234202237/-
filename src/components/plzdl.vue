<template>
  <div class="evaluate">
    <!-- 头部 -->
    <header>
      <img src="/logo.png" alt="" />
      <p>业主评价</p>
      <span><i class="iconfont">&#xe601;</i></span>
    </header>
    <!-- 内容 -->
    <div class="con">
      <p>评价</p>
    </div>
    <!-- 评论区 -->
    <div class="message">
      <p>请先登录或注册成为房先森用户，登录后才可以评论</p>
      <van-number-keyboard
        :show="show"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  components: {},
  data() {
    return {
      show: true,
      message: "",
    };
  },
  methods: {
    onInput(value) {
      Toast(value);
    }
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
.message {
  display: flex;
  flex-direction: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border: 1px solid #000;
  p{
      width: 80%;
  }
}
.con {
  width: 100%;
  height: 40%;
}
</style>