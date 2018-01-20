<template>
  <div class="index">
      <div class="main">
          <transition>
            <keep-alive include="home">
                <router-view>   
                </router-view>
            </keep-alive>
          </transition>
      </div>
      <footer class="footer">
          <div class="foot">
            <router-link active-class="bg" :to="{name: 'home'}"><img src="../../assets/homeImg/1.png" alt=""><span>首页</span></router-link>
            <router-link active-class="bg" :to="{name: 'classify'}"><img src="../../assets/homeImg/2.png" alt=""><span>分类</span></router-link>
            <div class="sq">
                <img src="../../assets/homeImg/inter.png" alt="">
            </div>
            <router-link active-class="bg" id="num-box" :to="{name: 'cart'}"><span class="num">{{$store.state.cart_list.length}}</span><img src="../../assets/homeImg/3.png" alt=""><span>购物车</span></router-link>
            <router-link active-class="bg" :to="{name: 'myself'}"><img src="../../assets/homeImg/4.png" alt=""><span>我的</span></router-link>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'index'
}
</script>

<style scoped lang="scss">
.index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    
}
.footer{
    width: 100%;
    flex-shrink: 0;
    .foot{
        width: 100%;
        height: 1rem;
        display: flex;
        background: #fff;
        align-items: center;
        border-top: 1px solid #ccc;
        .bg{
            color: #fd4848;
        }
        a{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #999;
            img{
                width: .4rem;
                height: .4rem;
            }
        }
        #num-box{
            position: relative;
            .num{
                width: .3rem;
                height: .3rem;
                display: block;
                background: red;
                font-size: .2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                color: #fff;
                position: absolute;
                right: .3rem;top: 0rem;
            }
        }
        .sq{
            img{
                width: .65rem;
                height: .65rem;
            }
        }
    } 
}

.v-enter-active,.v-leave-active{
	transition: transform 1s ease;
}
.v-enter{
	transform: translate3d(100%,0,0)
}
.v-enter-to,.v-leave{
	transform: translate3d(0,0,0)
}
.v-leave-to{
	transform: translate3d(-100%,0,0)
}
</style>
