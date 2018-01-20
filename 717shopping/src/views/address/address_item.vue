<template>
  <div class="address_item">
        <p>{{val.username}} {{val.phone}}</p>
        <p>{{val.province}} {{val.city}} {{val.area}} {{val.detail}}</p>
        <div class="tabs">
            <div class="l">
                <span class="defaults"></span>
                <span>设为默认</span>
            </div>
            <div class="r">
                <i class="iconfont">&#xe71f;</i>
                <span>编辑</span>
                <i class="iconfont">&#xe721;</i>
                <span @click="del_address">删除</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'address_item',
    props: {
        val: {
            type: Object
        }
    },
    methods: {
        del_address () {
            this.$http.post('/user/delect/address', {
                id: this.val.id
            }).then(res => {
                this.$store.commit('del_shipping_address', res.data.list);
            });
        }
    }
};
</script>

<style scoped lang="scss">
.address_item{
    width: 100%;
    p{
        padding: 0 .2rem;
        padding-top: .25rem;
    }
    .tabs{
        width: 100%;
        padding: .2rem;
        background: #fff;
        margin-top: .2rem;
        border-top: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .l{
            display: flex;
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
        .r{
            display: flex;
            align-items: center;
            i{
                padding: 0 .05rem;
                font-size: .44rem;
            }
        }
    }
}
</style>
