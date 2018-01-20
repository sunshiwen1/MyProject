<template>
    <li class="shop-item" @click="go_particulars">
        <img :src="'http://www.lb717.com//' + val.obj_data" alt="">
        <p>{{val.goods_name}}</p>
        <div class="bot">
            <span class="price">
                ￥<span>{{val.discount_price}}</span>
            </span>
            <img @click.stop="addCart" src="../../assets/homeImg/cartlogo.png" alt="">
        </div>
    </li>
</template>

<script>
import {getCookie} from '../../utils/utils';
export default {
    name: 'list',
    props: {
        val: {
            type: Object
        }
    },
    methods: {
        go_particulars () {
            this.$router.push({
                path: '/particulars',
                query: {
                    imgSrc: this.val.obj_data,
                    shopName: this.val.goods_name,
                    money: this.val.discount_price
                }
            });
        },
        addCart () {
            var token = getCookie('token');
            if(!token){
                this.$router.push({name:'login',query:{from:'home'}});
                return;
            }
            this.$http_token.post('/mall/index/getGoodsChannel').then(res => {
                this.$message('添加成功');
                this.$store.commit('updata_cart', {
                    id: this.val.goods_id,
                    goods_name: this.val.goods_name,
                    goods_price: this.val.discount_price,
                    url: 'http://www.lb717.com//' + this.val.obj_data,
                    count: 1,
                    checked: false
                });
                // this.$http.post('/add/cartList', {
                //     id: this.val.goods_id,
                //     goods_name: this.val.goods_name,
                //     goods_price: this.val.discount_price,
                //     url: 'http://www.lb717.com//' + this.val.obj_data,
                //     count: 1,
                //     checked: false
                // }).then(res => {
                //     console.log(res.data);
                // });
            });
        }
    }
}
</script>

<style scoped lang="scss">
.shop-item{
    width: 50%;
    margin-top: .1rem;
    background: #fff;
    img{
        width: 100%;
        height: auto;
    }
    p{
        font-size: .24rem;
        color: #999;
        height: .7rem;
        overflow: hidden;
    }
    .bot{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem .1rem;
        .price{
            color: #fc4141;
        }
        img{
            width: .5rem;
            height: .5rem;
        }
    }
}
</style>
