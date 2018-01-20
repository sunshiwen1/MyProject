<template>
  <div class="myself">
    <header class="header">
      <i class="iconfont">&#xe689;</i>
      <h6>我的717商城</h6>
      <i class="r"></i>
    </header>
    <section class="section">
      <div class="userbox">
        <img class="tx" src="../../assets/myselfImg/default_avatar.png" alt="">
        <p>13522687148</p>
      </div>
      <div class="my-design">
        <label>
          <img src="../../assets/myselfImg/shoping.png" alt="">
          <span>我的店铺</span>
        </label>
        <i class="iconfont">&#xe6e1;</i>
      </div>
      <ul class="nav">
        <li><img src="../../assets/myselfImg/my4.png" alt=""><span>代付款</span></li>
        <li><img src="../../assets/myselfImg/my5.png" alt=""><span>代发货</span></li>
        <li><img src="../../assets/myselfImg/my6.png" alt=""><span>代收货</span></li>
        <li><img src="../../assets/myselfImg/my7.png" alt=""><span>售后</span></li>
        <li class="last" @click="go_order"><img src="../../assets/myselfImg/my8.png" alt=""><span>我的订单</span></li>
      </ul>
      <ol class="manage">
        <li>
          <label><img src="../../assets/myselfImg/myhome.png" alt=""><span>我的社区</span></label>
          <i class="iconfont">&#xe6e1;</i>
        </li>
        <li>
          <label><img src="../../assets/myselfImg/my10.png" alt=""><span>账户余额</span></label>
          <i class="iconfont">&#xe6e1;</i>
        </li>
        <li @click="go_address">
          <label><img src="../../assets/myselfImg/my12.png" alt=""><span>地址管理</span></label>
          <i class="iconfont">&#xe6e1;</i>
        </li>
      </ol>
      <div class="hot-title">
        <img src="../../assets/myselfImg/my16.png" alt="">
        <p>热门推荐</p>
        <img src="../../assets/myselfImg/my17.png" alt="">
      </div>
      <div class="list-con">
        <shop-list v-for="(v, i) in dataList" :key="i" :val="v"></shop-list>
      </div>
    </section>
  </div>
</template>

<script>
import {getCookie} from '../../utils/utils';
import shop_list from '../../components/common.vue';
export default {
    name: 'myself',
    data: () => {
        return {
            dataList: [],
            id: 2
        };
    },
    components: {
        'shop-list': shop_list
    },
    created () {
        this.isLogin();
        this.id = Math.floor(Math.random() * (9 - 2 + 1) + 2);
    },
    mounted () {
        this.$http.post('/mall/index/getGoodsChannel', {
            channel_id: this.id
        }).then(res => {
            this.dataList = res.data.data.data;
        });
    },
    methods: {
        go_address () {
            this.$router.push({name: 'address'});
        },
        go_order () {
            this.$router.push({name: 'order'});
        },
        isLogin () {
            var token = getCookie('token');
            if(!token){
                this.$router.push({name:'login', query:{from:'myself'}});
                return;
            }
        }
    }
}
</script>

<style scoped lang="scss">
.myself{
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
    padding: 0 .2rem;background: #fff;
    .r{
      width: .32rem;
    }
  }
  .section{
    width: 100%;
    flex: 1;
    flex-shrink: 1;
    overflow-y: auto;
    .userbox{
      width: 100%;
      height: 1.97rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: url('../../assets/myselfImg/phpot.png')no-repeat;
      .tx{
        width: 1.23rem;
        height: 1.24rem;
      }
      p{
        padding-top: .1rem;
        color: #fff;
      }
    }
    .my-design{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .2rem .2rem;
      background: #fff;
      border-bottom: 1px solid #ccc;
      label{
        display: flex;
        align-items: center;
        span{
          padding-left: .2rem;
          color: #fc4141;
        }
      }
      i{
        color: #fc4141;
      }
      img{
        width: 0.7rem;
        height: 0.63rem;
      }
    }
    .nav{
      width: 100%;
      display: flex;
      background: #fff;
      li{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: .2rem 0;
        img{
          width: 0.45rem;
          height: 0.45rem;
        }
        span{
          padding: .1rem 0;
          font-size: .28rem;
        }
      }
      .last{
        border-left: 1px solid #ccc;
      }
    }
    .manage{
      width: 100%;
      background: #fff;
      margin-top: .2rem;
      li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .3rem .2rem;
        border-bottom: 1px solid #ccc;
        label{
          display: flex;
          align-items: center;
          img{
            width: 0.4rem;
            height: 0.36rem;
          }
          span{
            padding-left: .1rem;
          }
        }
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
      img{
        width: 0.34rem;
        height: 0.24rem;
        margin: 0 .1rem;
      }
    }
    .list-con{
        width: 100%;
        display: flex;
        flex-wrap:wrap;
    }
  }
}
</style>
