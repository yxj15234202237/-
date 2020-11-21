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
      <van-button type="default">取消</van-button>
      <p>写评论</p>

      <van-cell @touchstart.native.stop="show = true">
        <van-field
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入留言"
        />
      </van-cell>
      <van-number-keyboard
        :show="show"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
      <van-button type="primary">发送</van-button>
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
    },
    onDelete() {
      Toast("删除");
    },
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
}
</style>