<template>
  <div class="order">
      <header class="header">
          <div class="head-top">
              <p><i class="iconfont">&#xe6df;</i><span>返回</span></p>
              <p><span>我的订单</span></p>
              <p class="homelogo"><i class="iconfont home-ico">&#xe6cd;</i></p>
          </div>
          <div class="head-bot">
              <router-link :to="{path: '/order/all'}" active-class="line">全部</router-link>
              <router-link :to="{name: '211'}" >待付款</router-link>
              <router-link :to="{name: '2342'}" >待发货</router-link>
              <router-link :to="{name: '324'}" >待收货</router-link>
              <router-link :to="{name: '343'}" >售后</router-link>
          </div>
      </header>
      <section class="section">
          <router-view></router-view>
      </section>
  </div>
</template>

<script>
export default {
    name: 'order'
};
</script>

<style scoped lang="scss">
.order{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        flex-shrink: 0;
        background: #fff;
        padding: 0 .2rem;
        .head-top{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
            .homelogo{
                display: flex;
                justify-content: flex-end;
                width: 1.04rem;
            }
        }
        .head-bot{
            width: 100%;
            height: 1rem;
            display: flex;
            align-items: center;
            a{
                flex:1;
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                color: #999;
            }
            .line{
                border-bottom: 1px solid orange;
            }
        }
    }
}
</style>
