<template>
  <div class="faxqpz">
    <header class="header">
      <img src="/logo.png" alt class="logo" />
      <p class="cjt-zxfa">装修方案</p>
      <ul class="cjt-uls">
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
    <div class="cjt-center">
      <div class="cjt-jztc">
        <dl>
          <dt>
            <img src="/case/case1.jpg" alt />
          </dt>
          <dd>
            <h2>699全包精装套餐</h2>
            <p class="price">
              价格：
              <span>￥699元/㎡</span>
            </p>
            <p class="yy">
              已预约：
              <span>221套</span>
            </p>
            <p class="fs">
              正式发售：
              <span>全包套餐火爆预约中</span>
            </p>
          </dd>
        </dl>
        <p>精装全包套餐，包设计/包主材/包施工/包监理。采用知名辅材，一线主材，工厂直供F2C模式</p>
      </div>
      <div class="cjt-cen-a">
        <van-tabs>
          <van-tab title="套餐详情"></van-tab>
          <van-tab title="配置清单"></van-tab>
          <van-tab title="施工工艺"></van-tab>
          <van-tab title="服务流程"></van-tab>
        </van-tabs>
        <div class="bql">
          <ul>
            <li>厨房</li>
            <li>卫生间</li>
            <li>阳台</li>
            <li class="li3">卧室/客房/书房</li>
            <li>客厅</li>
          </ul>
        </div>
        <div class="zxys">
          <table cellspacing="0">
            <thead>
              <tr>
                <td class="td1">项目</td>
                <td>品牌</td>
                <td class="tds td2">详细说明</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td1">地柜</td>
                <td>定制橱柜</td>
                <td class="td2">3延米以内</td>
              </tr>
              <tr>
                <td class="td1">吊柜</td>
                <td>定制橱柜</td>
                <td class="td2">1.2延米内，阻尼抽屉2个（单色石英台面）</td>
              </tr>
              <tr>
                <td class="td1">台面</td>
                <td>石英台</td>
                <td class="td2">3延米以内</td>
              </tr>
              <tr>
                <td class="td1">套装门/移门及五金</td>
                <td>樱花</td>
                <td class="td2">含门以及安装，三维可调式合页，门锁，门吸，厨房空间提供一樘门，平面和插框造型，仅限原始用户型空间配门。若为移门，只限3平方米。</td>
              </tr>
              <tr>
                <td class="td1">门套</td>
                <td>双诺</td>
                <td class="td2">定制</td>
              </tr>
              <tr>
                <td class="td1">小地砖</td>
                <td>马可波罗瓷砖</td>
                <td class="td2">地砖满铺</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="cjt-zh">
        <p>
          ————房先森互联网家装有别于传统装修公司与其他装修中
          介平台,以自营模式整合设计师与项目经理,杜绝项目转
          ,包外包,利用互联网将工地进行在线全景直播,通过去中
          间环节,提供装修套餐+个性化定制服务
        </p>
      </div>
      <div class="cjt-phone">
        <div class="phone">
          <p>
            <i class="iconfont icon-tel"></i>服务热线:400-9977-658
          </p>
        </div>
        <ul class="uls3">
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>

    <footer class="footer">
      <div class="cjt-msyy">
        <i class="iconfont icon-pencle">马上免费预约</i>
      </div>
      <p>Spex with</p>
    </footer>
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
.faxqpz {
  background: #eaeaea;
  display: flex;
  flex-direction: column;
}
.cjt-center {
  padding-top: 10px;
  width: 100%;
  flex: 1;
  overflow: auto;
  .cjt-jztc {
    width: 100%;
    background: #ffffff;
    padding: 18px 8px;
    margin-bottom: 10px;
    p {
      margin-top: 10px;
      color: #333;
      line-height: 20px;
      font-size: 14px;
    }
    dl {
      width: 100%;
      display: flex;
      dt {
        width: 40%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        width: 60%;
        padding-left: 10px;
        h2 {
          font-size: 20px;
          color: #333333;
          margin-bottom: 14px;
        }
        p {
          color: #999999;
          font-size: 14px;
        }
        .price {
          margin-bottom: 10px;
          span {
            color: #ff4351;
            font-weight: bolder;
          }
        }
        .yy {
          margin-bottom: 14px;
          span {
            color: #333;
          }
        }
        .fs {
          span {
            color: #ff4351;
          }
        }
      }
    }
  }
  .cjt-cen-a {
    width: 100%;
    background: #ffffff;
    .bql {
      padding: 10px 0;
      width: 100%;
      display: flex;
      overflow: auto;
      flex-direction: row;
      ul {
        list-style: none;
        display: flex;
        .li3 {
          width: 130px;
        }
        li {
          border: 1px solid #2bb281;
          background: #ffffff;
          border-radius: 20px;
          width: 70px;
          text-align: center;
          color: #2bb281;
          margin-left: 4px;
          &:hover {
            color: #eaeaea;
            background: #2bb281;
          }
        }
      }
    }
  }
  .zxys {
    width: 100%;
    padding: 0 4px 15px 4px;
    table {
      width: 100%;
      td {
        border: 1px solid #999999;
        padding: 8px 3px;
      }
      .td1 {
        border-left: none;
      }
      .td2 {
        border-right: none;
      }
      tr {
        font-size: 12px;
      }

      thead {
        width: 100%;
        tr {
          td {
            color: #2bb281;
          }
        }
        .tds {
          width: 45%;
        }
      }
      tbody {
        tr {
          td {
            color: #999999;
          }
        }
      }
    }
  }
  .cjt-zh {
    width: 100%;
    background: #fff;
    padding: 4px;
    margin: 10px 0;
  }
}
</style>