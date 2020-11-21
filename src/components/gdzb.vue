<template>
  <div class="dyzbox">
    <header class="dyzheader">
      <img src="/logo.png" alt class="logo" />
      <p class="dyz-zxfa">工地直播</p>
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
    <ul class="dyzul">
      <li>
        筛选
        <span></span>
      </li>
      <li>
        阶段
        <span></span>
      </li>
      <li>
        排序
        <span></span>
      </li>
      <li>
        <i class="iconfont icon-search"></i>
      </li>
    </ul>
    <div class="dyzbox1">
      <dl>
        <dt></dt>
        <dd>
          <p>戈雅公寓24幢</p>
          <span>泥木工程</span>
          <p>
            <span>三室</span>
            <span></span>
            <span></span>
          </p>
        </dd>
      </dl>
    </div>
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
$green1:#39c894;
$green2:#2bb281;
$gray1:#999999;
$gray2:#666666;
$black1:#eaeaea;
$black:#333333;
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.dyzheader {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  align-items: center;
  background: #ffffff;
}
.dyzheader > .logo {
  height: 70%;
  width: 128px;
}
.dyzheader > .dyz-zxfa {
  font-size: 20px;
  color: #333333;
}
.dyzheader > .dyz-uls {
  display: flex;
  list-style: none;
}
.dyzheader > .dyz-uls li {
  text-align: center;
  margin-left: 4px;
}
.dyzheader > .dyz-uls li i {
  width: 22px;
  height: 27px;
}
.dyzheader > .dyz-uls li p {
  font-size: 12px;
}
.dyzbox{
    widows: 100%;
    height:100%;
    .dyzul{
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        border-top:1px solid $black1;
        border-bottom:1px solid $black1;
        li{
            flex:1;
            text-align: center;
            height:50px;
            line-height: 50px;
            span{
                display:inline-block;
                width:8px;
                height:8px;
                border:1px solid transparent;
                border-left:1px solid $gray1;
                border-bottom:1px solid $gray1;
                transform: rotate(-45deg);
                margin-left:10px;
                margin-bottom:4px;
            }
            i{
                font-size:26px;
                color:$green2;
            }
        }
    }
}
.dyzbox1{
    width:100%;
    dl{
        padding:10px 3px;
        display:flex;
        dt{
            width:140px;
            height:90px;
            background:$green1;
            margin-right:10px;
        }
        // dd{

        // }

    }
}
</style>