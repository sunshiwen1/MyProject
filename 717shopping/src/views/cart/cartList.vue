<template>
  <div class="list-item">
        <span @click="change_checked" class="check" :class="{'checkeds':datas.checked}"></span>
        <div class="imgs">
            <img :src="datas.url" alt="">
        </div>
        <div class="item-r">
            <p class="name">{{datas.goods_name}} </p>
            <p class="num-box"><i class="iconfont">&#xe72a;</i><span>{{datas.count}}</span></p>
            <p class="price">￥<span>{{datas.goods_price}}</span></p>
            <div class="add-box">
                <span @click="reduce_shop">-</span>
                <span>{{datas.count}}</span>
                <span @click="add_shop" class="add">+</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'cart-item',
    props: {
        datas: {
            type: Object
        }
    },
    methods: {
        add_shop () {
            this.$store.commit('change_count', {
                id: this.datas.id,
                count: ++this.datas.count
            });
            this.$store.commit('change_total_price');
        },
        reduce_shop () {
            this.$store.commit('change_count', {
                id: this.datas.id,
                count: --this.datas.count
            });
            if (this.datas.count < 1) {
                this.datas.count = 1;
            };
            this.$store.commit('change_total_price');
        },
        change_checked () {
            this.$store.commit('change_checked', {
                id: this.datas.id,
                checked: !this.datas.checked
            });
            this.$store.commit('change_total_price');
        }
    } 
}
</script>

<style scoped lang="scss">
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
    .add{
        border-right: none;
    }
    }
}
}
</style>
