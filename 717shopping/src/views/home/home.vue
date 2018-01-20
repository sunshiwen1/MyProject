<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <img src="../../assets/homeImg/717.gif" alt="">
      </div>
      <div class="serbox" @click="go_to_search">
        <img src="../../assets/homeImg/serach.png" alt="">
        <input type="text" name="" id="" placeholder="请输入您要购买的商品">
      </div>
      <dl>
        <dt><img src="../../assets/homeImg/shoping.png" alt=""></dt>
        <dd>我的店铺</dd>
      </dl>
    </header>
    <section class="section">
      <div class="swiper-container banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/homeImg/home.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/homeImg/video.png" alt="">
          </div>
        </div>
        <div class="swiper-pagination page"></div>
      </div>
      <ul class="nav">
        <li>
          <img src="../../assets/homeImg/nav1.png" alt="">
          <span>牛奶乳品</span>
        </li>
        <li>
          <img src="../../assets/homeImg/nav2.png" alt="">
          <span>牛奶乳品</span>
        </li>
        <li>
          <img src="../../assets/homeImg/nav3.png" alt="">
          <span>牛奶乳品</span>
        </li>
        <li>
          <img src="../../assets/homeImg/nav4.png" alt="">
          <span>牛奶乳品</span>
        </li>
        <li>
          <img src="../../assets/homeImg/nav5.png" alt="">
          <span>牛奶乳品</span>
        </li>
        <li>
          <img src="../../assets/homeImg/nav6.png" alt="">
          <span>牛奶乳品</span>
        </li>
        <li>
          <img src="../../assets/homeImg/nav7.png" alt="">
          <span>牛奶乳品</span>
        </li>
        <li>
          <img src="../../assets/homeImg/nav8.png" alt="">
          <span>牛奶乳品</span>
        </li>        
      </ul>
      <div class="shpdt">
        <div class="font">
          商城动态
        </div>
        <div class="swiper-container adverCont">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p>
            </div>
            <div class="swiper-slide">
              <p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="day">
        <div class="day-left">
          <img src="../../assets/homeImg/todayimg.png" alt="">
          <h6>天天特惠</h6>
          <span>每天都有惊喜</span>
        </div>
        <div class="day-right">更多<i class="iconfont">&#xe6d6;</i> </div>
      </div>
      <div class="ban">
        <div class="ban-left">
          <img src="../../assets/homeImg/home1.png" alt="">
        </div>
        <div class="ban-left">
          <div class="tops"><img src="../../assets/homeImg/ruwei.png" alt=""></div>
          <div class="tops"><img src="../../assets/homeImg/gaodian.png" alt=""></div>
        </div>
      </div>
      <!-- <shop :data="dataList"></shop> -->
      <div class="list">
        <div class="list-tit">
            <div class="left"></div>
            <div class="center">
                <span>————</span>
                <img src="../../assets/homeImg/homelandlogo.png" alt="">
                <span>家乡味道</span>
                <span>————</span>
            </div>
            <div class="right">
                <span>更多</span><i class="iconfont">&#xe6d6;</i>
            </div>
        </div>
        <ul
          class="list-con"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <shop-item v-for="(v, i) in dataList" :key="i" :val="v"></shop-item>
        </ul>
        <p class="tip">{{tip}}</p>
        <!-- <div class="list-con">
              <div class="shop-item" v-for="(v, i) in dataList" :key="i">
                    <img :src="'http://www.lb717.com//' + v.obj_data" alt="">
                    <p>{{v.goods_name}}</p>
                    <div class="bot">
                        <span class="price">
                            ￥<span>{{v.discount_price}}</span>
                        </span>
                        <img src="../../assets/homeImg/cartlogo.png" alt="">
                    </div>
              </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui';
import shopItem from './shopList.vue';
export default {
    name: 'home',
    data: () => {
        return { 
            channel_id: 2,
            dataList: [],
            tip:'拼命加载中...'
        };
    },
    components: {
        InfiniteScroll,
        shopItem
    },
    created () {
      this.queryGoodsList();
    },
    methods: {
        go_to_search () {
          this.$router.push('/search')
        },
        loadMore() {
          this.loading = true;
          if (!this.loading) {
             return;
          }
          ++this.channel_id;
          setTimeout(() => {
            this.queryGoodsList();
            this.loading = false;
          }, 2500);
        },
        queryGoodsList: function () {
            this.$http.post('/mall/index/getGoodsChannel', {
                channel_id: this.channel_id
            }).then(res => {
                console.log(res);
                if (res.data.data.data.length === 0) {
                    console.log('已加载全部数据');
                    this.tip = '已加载全部数据';
                    return;
                };
                this.dataList = this.dataList.concat(res.data.data.data);
            })
        }
    },
    mounted () {
      new Swiper('.banner', {
        loop: true,
        autoplay: 2000,
        pagination: '.page'
      });
      new Swiper('.adverCont', {
        loop: true,
        autoplay: 1000,
        direction : 'vertical'
      })
    }
}
</script>

<style scoped lang="scss">
.home{
  width: 100%;
 
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 1rem;
  .header{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    background: #fff;
    flex-shrink: 0;
    border-bottom: 1px solid #ccc;
    .logo{
      width: 1rem;height: .4rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .serbox{
      width: 100%;
      height: .72rem;
      background: #f5f5f5;
      margin-left: .2rem;
      margin-right: .2rem;
      display: flex;
      align-items: center;
      img{
        width: .26rem;
        height: .26rem;
        margin-left: .2rem;
      }
      input{
        padding-left: .1rem;
        flex: 1;
      }
    }
    dl{
      width: 1.7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      dt{
        img{
          width: .47rem;height: .42rem;
        }
      }
      dd{
        font-size: .26rem;
        color: #fd4848;
      }
    }
  }
  .section{
    width: 100%;
    flex:1;
    flex-shrink: 1;
    overflow-y: auto;
    .banner{
      width: 100%;
      height: auto;
      img{
        width: 100%;
        height: auto;
      }
    }
    .nav{
      width: 100%;
      display: flex;
      flex-wrap:wrap;
      background: #fff;
      padding: .2rem 0; 
      li{
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
          width: .9rem;
          height: .9rem;
        }
        span{
          margin: .05rem 0;
          font-size: 0.26rem;
        }
      }
    }
    .shpdt{
      width: 100%;
      padding: .2rem .2rem;
      display: flex;
      background: #fff;
      .font{
        width: .9rem;
        height: .8rem;
        font-size: 16px;
        line-height: .4rem;
        color: #ff6d00;
      }
      .adverCont{
        width: 100%;
        height: .8rem;
        border: 1px solid #ccc;
        color: #666;
        margin-left: .1rem;
        .swiper-slide{
          width: 100%;
          height: 100%;
          p{
            width: 100%;
            height: 100%;
            font-size: .28rem;
            overflow: hidden;
          }
        }
      }
    }
    .day{
      width: 100%;
      display: flex;
      padding: .2rem .2rem;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      margin-top: .2rem;
      .day-left{
        display: flex;
        color: #ff6d00;
        align-items: center;
        img{
          width: .4rem;
          height: .4rem;
        }
        h6{
          padding-left: .2rem;
        }
        span{
          padding-left: .2rem;
          font-size: .28rem;
        }
      }
      .day-right{
        font-size: .28rem;
        align-items: center;
        color: #999;
      }
    }
    .ban{
      width: 100%;
      margin-top: .1rem;
      display: flex;
      .ban-left{
        flex:1;
        img{
          width: 100%;
          height: auto;
        }
      }
      .ban-right{
        flex:1;
        .top{
          width: 100%;
          img{
            width: 100%;
            height: auto;
          }
        }
        .bot{
          width: 100%;
          img{
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .list{
    width: 100%;
    .list-tit{
        width: 100%;
        padding: .2rem .2rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .1rem;
        .left{
            width: .21rem;
        }
        .center{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ff6d00;
            img{
                width: .4rem;
                height: .4rem;
                margin-left: .1rem;
                margin-right: .1rem;
            }
            span{
                padding: 0 .1rem;
            }
        }
        .right{
            display: flex;
            align-items: center;
            color: #999;
            font-size: .28rem;
        }
    }
    .list-con{
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        }
    }
    .tip{
      width: 100%;
      padding: .1rem;
      text-align: center;
    }
  }
}
</style>
