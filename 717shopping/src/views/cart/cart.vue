<template>
  <div class="cart">
    <header class="header">
      <span class="empty"></span>
      <p>购物车</p>
      <span>编辑</span>
    </header>
    <section class="section">
      <div class="list-box">
        <!-- <div class="list-item">
          <span class="check"></span>
          <div class="imgs">
            <img src="../../assets/cartImg/1.jpg" alt="">
          </div>
          <div class="item-r">
            <p class="name">麻香嘴 花椒油5L/桶 </p>
            <p class="num-box"><i class="iconfont">&#xe72a;</i><span>1</span></p>
            <p class="price">￥<span>189.00</span></p>
            <div class="add-box">
              <span>+</span>
              <span>1</span>
              <span class="minus">-</span>
            </div>
          </div>
        </div> -->
        <p class="titles" v-if="$store.state.cart_list.length === 0">
          您还没有添加任何商品到购物车...
          <button>去逛逛</button>
        </p>
        <cart-item v-for="(v, i) in $store.state.cart_list" :key="v.id" :datas="v"></cart-item>
        <div class="hot-title">
          <img src="../../assets/myselfImg/my16.png" alt="">
          <p>热门推荐</p>
          <img src="../../assets/myselfImg/my17.png" alt="">
        </div>
        <div class="list-con">
          <shop-list v-for="(v, i) in dataList" :key="i" :val="v"></shop-list>
        </div>
      </div>
    </section>
    <div class="all-check">
      <div class="l">
        <span class="check" @click="all_checked" :class="{'checkeds': $store.state.all_checked}"></span>
        <span>全选</span>
      </div>
      <div class="r">
        <span>合计:</span>
        <span class="money">￥<span>{{this.$store.state.total_price}}</span></span>
        <span class="js">结算</span>
      </div>
    </div>
  </div>
</template>

<script>
import cart_item from './cartList.vue';
import shop_list from '../../components/common.vue';
export default {
    name: 'cart',
    data: () => {
        return {
            dataList: [],
            id: 2
        };
    },
    components: {
        'cart-item': cart_item,
        'shop-list': shop_list
    },
    created () { 
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
        all_checked () {
            this.$store.commit('change_all', !this.$store.state.all_checked);
            this.$store.commit('change_total_price');
        }
    }
};
</script>

<style scoped lang="scss">
.cart{
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
    padding: 0 .2rem;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .empty{
      width: .54rem;
    }
  }
  .section{
    width: 100%;
    flex: 1;
    flex-shrink: 1;
    overflow-y: auto;
    .list-box{
      width: 100%;
      .titles{
        width: 100%;
        padding: 1.2rem 0;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button{
          padding: .1rem .4rem;
          background: none;
          border: 1px solid red;
          color: #999;
          margin-top: .2rem;
          border-radius: .1rem;
        }
      }
      .list-item{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: .2rem;
        background: #fff;
        padding: .2rem 0;
        &:nth-child(1){
          margin-top: 0;
        }
        .check{
          width: .4rem;
          height: .4rem;
          background: #ccc;
          border-radius: 50%;
          margin-left: .2rem;
          margin-right: .2rem;
        }
        .checkeds{
          background: url('../../assets/cartImg/checked.gif') no-repeat center center;;
        }
        .imgs{
          width: 2rem;
          height: 2rem;
          border: 1px solid #ccc;
          border-radius: .05rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .item-r{
          flex:1;
          padding-left: .2rem;
          position: relative;
          .name{
            padding: .2rem 0;
            color: #000;
          }
          .num-box{
            i{
              font-size: .20rem;
            }
          }
          .price{
            padding: .2rem 0;
            color: #fc4141;
            font-weight: bold;
          }
          .add-box{
            width: 1.8rem;
            height: .6rem;
            border: 1px solid #ccc;
            position: absolute;
            right: .2rem;
            bottom: .2rem;
            display: flex;
            span{
              flex: 1;
              border-right: 1px solid #ccc;
              text-align: center;
              line-height: .6rem;
            }
            .minus{
              border-right: none;
            }
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
  .all-check{
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ccc;
    background: #fff;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    .l{
      display: flex;
      .check{
        width: .4rem;
        height: .4rem;
        background: #ccc;
        border-radius: 50%;
        margin-left: .2rem;
        margin-right: .2rem;
      }
      .checkeds{
        background: url('../../assets/cartImg/checked.gif') no-repeat center center;;
      }
    }
    .r{
      display: flex;
      align-items: center;
      .money{
        margin-right: .2rem;
        font-weight: bold;
        color: #fc4141
      }
      .js{
        padding: 0 .6rem;
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        background: #fc4141;
      }
    }
  }
}
</style>
