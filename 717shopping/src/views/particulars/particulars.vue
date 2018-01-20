<template>
  <div class="part">
      <header class="header">
          <p @click="go_back"><i class="iconfont">&#xe6df;</i><span>返回</span></p>
          <p><span>商品</span><span>详情</span></p>
          <p @click="go_home" class="r"><i class="iconfont home-ico">&#xe6cd;</i></p>
      </header>
      <section class="section">
          <div class="swiper-container shopImg">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <img :src="'http://www.lb717.com//' + $route.query.imgSrc" alt="">
                  </div>
              </div>
          </div>
          <div class="shop-part">
              <p>{{$route.query.shopName}}</p>
              <div class="store">
                  <div class="money">
                      <h6>￥{{$route.query.money}}</h6>
                      <h6>(运费:￥0.00)</h6>
                  </div>
                  <button class="refer">溯源查询</button>
              </div> 
          </div>
          <div class="shop">
                <div class="shop-name">
                    <p>嫩江原食品专营店</p>
                    <p>店主:NJY1442495</p>
                </div>
                <button>进入店铺</button>
          </div>
          <div class="hot-title">
                <img src="../../assets/myselfImg/my16.png" alt="">
                <p></p>
                <img src="../../assets/myselfImg/my17.png" alt="">
          </div>
          <div class="swiper-container recommend">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(v, i) in dataList" :key="i">
                      <img :src="v.src" alt="">
                      <p class="rec-name">
                          {{v.name}}
                      </p>
                      <p class="rec-money">￥<span>{{v.money}}</span></p>
                  </div>
              </div>
          </div>
      </section>
      <div class="footer">
          <div class="foot-item">
              <img src="../../assets/partImg/05.png" alt="">
              <span>客服</span>
          </div>
          <div class="foot-item">
              <img src="../../assets/partImg/3.png" alt="">
              <span>客服</span>
          </div>
          <p class="add">加入购物车</p>
          <p>立即购买</p>
      </div>
      <!-- <div>{{$route.params.imgSrc}}</div>
      <div>{{$route.params.shopName}}</div> -->
  </div>
</template>

<script>
export default {
    name: 'part',
    data: () => {
        return {
            dataList: [
                {
                    src: 'src/assets/partImg/r1.jpg',
                    name: '大瀛 净鸭  1.3kg/袋装',
                    money: 31.80
                },
                {
                    src: 'src/assets/partImg/r2.jpg',
                    name: '关东大嫂 姬松茸 110g 味醇鲜美，使用价值颇高 包邮',
                    money: 42.90
                },
                {
                    src: 'src/assets/partImg/r3.jpg',
                    name: '老干妈辣酱',
                    money: 15.50
                },
                {
                    src: 'src/assets/partImg/r4.jpg',
                    name: '大瀛 鸭翅，袋装',
                    money: 20.90
                }
            ]
        };
    },
    mounted () {
        new Swiper('.recommend', {
            loop: true,
            slidesPerView: 3.1
        })
    },
    methods: {
        go_back () {
            this.$router.push('/');
        },
        go_home () {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped lang="scss">
.part{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        background: #fff;
        padding: 0 .2rem;
        p{
            display: flex;
            align-items: center;
            span{
                padding: 0 .1rem;
                color: #000;
            }
            .home-ico{
                padding: .1rem .1rem;
                border: 1px solid #ccc;
                border-radius: 48%;
            }
        }
        .r{
            display: flex;
            justify-content: flex-end;
            width: 1.04rem;
        }
    }
    .section{
        width: 100%;
        flex:1;
        flex-shrink: 1;
        overflow-y: auto;
        .shopImg{
            width: 100%;
            img{
                width: 100%;
                height: auto;
            }
        }
        .shop-part{
            width: 100%;
            padding: 0 .2rem;
            background: #fff;
            p{
                color: #000;
                padding: .2rem 0;
            }
            .store{
                width: 100%;
                display: flex;
                .money{
                    font-size: .24rem;
                    flex:1;
                    color: #000;
                    h6{
                        font-weight: normal;
                    }
                }
                .refer{
                    padding: 0 .2rem;
                    background: #4f99f2;
                    border: none;
                    color: #fff;
                    border-radius: .1rem;
                }
            }
        }
        .shop{
            width: 100%;
            background: #fff;
            display: flex;
            padding: 0 .2rem;
            padding-top: .8rem;
            padding-bottom: .1rem;
            .shop-name{
                flex: 1;
                color: #666666;;
            }
            button{
                padding: 0 .2rem;
                border: 1px solid #ccc;
                background: none;
                border-radius: .1rem;
            }
        }
        .hot-title{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            margin-top: .2rem;
            padding: .2rem 0;
            p{
                width: 1.08rem;
            }
            img{
                width: 0.34rem;
                height: 0.24rem;
                margin: 0 .1rem;
            }
        }
        .recommend{
            width: 100%;
            background: #fff;
            .swiper-slide{
                padding-left: .2rem;
                width:33%;
                img{
                    width: 100%;
                    height: auto;
                }
                .rec-name{
                    text-align: center;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
                .rec-money{
                    text-align: center;
                    color: #fc4141;
                    font-size: .24rem;
                    font-weight: bold;
                    padding: .1rem 0;
                }
            }
        }
    }
    .footer{
        width: 100%;
        height: 1rem;
        display: flex;
        background: #fff;
        flex-shrink: 0;
        border-top: 1px solid #ccc;
        .foot-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: .48rem;
                height: .43rem;
            }
            span{
                text-align: center;
            }
        }
        p{
            padding: 0 .4rem;
            height: 100%;
            text-align: center;
            line-height: 1rem;
            color: #fff;
            background: #fb4142;
        }
        .add{
            background: #fe8282;
        }
    }
}
</style>
