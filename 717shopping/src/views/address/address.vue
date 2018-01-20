<template>
  <div class="address">
      <header class="header">
          <i class="iconfont" @click="go_back">&#xe653;</i>
          <span>收货地址</span>
          <i class="iconfont">&#xe6cd;</i>
      </header>
      <section class="section">
          <div class="address_list">
              <address-item v-for="(v, i) in $store.state.addressList" :key="i" :val="v"></address-item>
          </div>
          <div class="btn-box">
              <button @click="go_add_address">新增收货地址</button>
          </div>
      </section>
  </div>
</template>

<script>
import address_item from './address_item.vue';
export default {
    name: 'address',
    data: () => {
        return {
            addressList: []
        };
    },
    components: {
        'address-item': address_item
    },
    mounted () {
        // this.$store.dispatch('get_user_address');
        this.$http.post('/user/getAddress').then(res => {
            // this.addressList = res.data.list;
            this.$store.commit('add_shipping_address', res.data.list);
        });
    },
    methods: {
        go_back () {
            this.$router.back();
        },
        go_add_address () {
            this.$router.push({name: 'consignee'});
        }
    }
}
</script>

<style scoped lang="scss">
.address{
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
        padding: 0 .2rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .section{
        width: 100%;
        flex: 1;
        flex-shrink: 1;
        overflow-y: auto;
        .btn-box{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 1.2rem;
            padding-top: .6rem;
            button{
                width: 100%;
                border: none;
                outline: none;
                background: #fc4141;
                padding: .3rem 0;
                color: #fff;
                border-radius: .6rem;
            }
        }
        .address_list{
            width: 100%;
            background: #fff;   
        }
    }
}
</style>
