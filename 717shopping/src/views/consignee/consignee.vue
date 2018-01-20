<template>
  <div class="consignee">
      <header class="header">
          <i class="iconfont" @click="back_address">&#xe653;</i>
          <span>收货人</span>
          <i class="iconfont">&#xe6cd;</i>
      </header>
      <section class="section">
          <div class="main">
              <input type="text" placeholder="收货人姓名" v-model.trim="username">
              <input type="text" placeholder="手机号" v-model.trim="phone">
              <div class="address-select">
                  <select name="" id="" v-model="select_province">
                      <option value="请选择省" selected="selected">请选择省</option>
                      <option v-for="(v, i) in addressList" :key="i" :value="v.name">{{v.name}}</option>
                  </select>
                  <select name="" id="" v-model="select_city">
                      <option value="请选择市" selected="selected">请选择市</option>
                      <option v-for="(v, i) in city" :key="i" :value="v.name">{{v.name}}</option>
                  </select>
              </div>
              <div class="address-area">
                  <select name="" id="" v-model="select_area">
                      <option value="请选择区" selected="selected">请选择区</option>
                      <option v-for="(v, i) in area" :key="i" :value="v">{{v}}</option>
                  </select>
              </div>
              <input type="text" placeholder="详细地址" v-model="detail">
              <div class="default-address">
                  <span class="defaults"></span>
                  <span>设为默认地址</span>
              </div>
              <div class="btn-box">
                   <button @click="save">保存</button>
              </div>    
          </div>
      </section>
  </div>
</template>

<script>
import {getCookie} from '../../utils/utils.js';
import { MessageBox } from 'mint-ui';
export default {
    name: 'consignee',
    data: () => {
        return {
            username: '',
            phone: '',
            province_name: '',
            city_name: '',
            area_name: '',
            detail: '',
            addressList: [],
            select_province: '请选择省',
            city: [],
            select_city: '请选择市',
            area: [],
            select_area: '请选择区'
        };
    },
    components: {
    },
    created () {
        this.$http.post('/select/address').then(res => {
            this.addressList = res.data;
        });
    },
    methods: {
        back_address () {
            this.$router.back();
        },
        save () {
            if (!this.username || !this.phone || !this.province_name || !this.city_name || !this.area_name || !this.detail) {
                MessageBox('提示', '请填写完整的收货地址');
                return;
            };
            if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)) {
                MessageBox('提示', '请填写正确的手机号码格式');
                return;
            };
            // this.$store.commit('add_shipping_address', {
            //     token: getCookie('token'),
            //     username: this.username,
            //     phone: this.phone,
            //     province: this.province_name,
            //     city: this.city_name,
            //     area: this.area_name,
            //     detail: this.detail
            // })
            this.$http.post('/user/address', {
                token: getCookie('token'),
                username: this.username,
                phone: this.phone,
                province: this.province_name,
                city: this.city_name,
                area: this.area_name,
                detail: this.detail
            }).then(res => {
                if (res.data === 'success') {
                    MessageBox('提示', '保存成功');
                    this.username = '';
                    this.phone = '';
                    this.province_name = '';
                    this.city_name = '';
                    this.area_name = '';
                    this.detail = '';
                };
            }); 
        }
    },
    watch: {
        select_province (val) {
            this.province_name = val;
            this.addressList.forEach(item => {
                if (item.name == val) {
                    this.city = item.city;
                }
            });
        },
        select_city (val) {
            this.city_name = val;
            this.city.forEach(item => {
                if (item.name == val) {
                    this.area = item.area;
                }
            });
        },
        select_area (val) {
            this.area_name = val
        }
    }
}
</script>

<style scoped lang="scss">
.consignee{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
        .main{
            width: 100%;
            padding: 0 .2rem;
            input{
                width: 100%;
                height: .9rem;
                background: #fff;
                margin-top: .23rem;
                padding-left: .1rem;
            }
            .address-select{
                width: 100%;
                height: .9rem;
                margin-top: .23rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                select{
                    width: 2.8rem;
                    height: .9rem;
                    border: none;
                }
            }
            .address-area{
                width: 100%;
                height: .9rem;
                margin-top: .23rem;
                select{
                    width: 100%;
                    height: .9rem;
                    border: none;
                }
            }
            .default-address{
                width: 100%;
                display: flex;
                padding: .2rem 0;
                align-items: center;
                .defaults{
                    width: .4rem;
                    height: .4rem;
                    border-radius: 50%;
                    margin-right: .2rem;
                    border: 1px solid #ccc;
                }
                .checkeds{
                    background: url('../../assets/cartImg/checked.gif') no-repeat center center;;
                }
            }
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
        }
    }
}
</style>
