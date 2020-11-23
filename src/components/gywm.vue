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
        <p>
          房先森互联网装修平台由杭州瑞壹网络科技有限公司于2015年成立上线，房先森立足刚需房，专注于家庭装修服务，利用互联网将装修、供应链、金融进行融合，多维度实现用户对设计师、工长、工地、材料等的线上选择体验，房先森以自营的模式真正意义上过滤掉传统家装公司利润，将利润让给业主。房先森与银行合作的专修贷款能够解决业主装修资金问题，并以装修套餐+个性化定制的模式，提供创新型装修服务。
        </p>
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