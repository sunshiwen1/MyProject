<template>
  <div class="classify">
    <header class="header">
      <div class="search">
        <img src="../../assets/homeImg/serach.png" alt="">
        <input type="text" placeholder="请输入您要购买的商品">
      </div>
    </header>
    <section class="section">
        <div class="main">
          <ul class="tabs">
            <li v-for="(v, i) in tabList" :key="i" @click="tab_click">
              <span>{{v}}</span>
            </li>
          </ul>
        <div class="conbox" ref="conbox">
          <ul>
            <li v-for="(v, i) in tabItem" :key="i">
              <dl>
                <dt><img :src="v.img" alt=""></dt>
                <dd>{{v.name}}</dd>
              </dl>
            </li>
            <!-- <li>
              <dl>
                <dt><img src="../../assets/classifyImg/jia2@2x.png" alt=""></dt>
                <dd>东南</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src="../../assets/classifyImg/jia3@2x.png" alt=""></dt>
                <dd>东南</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src="../../assets/classifyImg/jia4@2x.png" alt=""></dt>
                <dd>东南</dd>
              </dl>
            </li> -->
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'classify',
    data: () => {
        return {
            tabList: [
                '家乡味道',
                '进口食品',
                '牛奶乳品',
                '休闲零食',
                '生鲜果蔬',
                '米面粮油',
                '调味调料',
                '酒水饮料'
            ],
            tabItem: []
        }
    },
    created () {
      this.$http.post('/get/classifyData').then((res) => {
          this.tabItem = res.data.array;
      });
    },
    methods: {
      tab_click () {
          this.$loading.show(this.$refs.conbox);
          // this.$loading.hide()
          // this.$http.get('/mobile/Category/categorySon?sonid=4').then((res) => {
          //     console.log(res);
          // });
          setTimeout(() => {
              this.$http.post('/get/classifyData').then((res) => {
                  this.tabItem = res.data.array;
                  this.$loading.hide(this.$refs.conbox);
              });
          }, 2000);
      }
    }
};
</script>

<style scoped lang="scss">
.classify{
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 1rem;
  flex-direction: column;
  .header{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 0 .6rem;
    flex-shrink: 1;
    border-bottom: 1px solid #ccc;
    .search{
      width: 100%;
      background: #f5f5f5;
      height: .7rem;
      display: flex;
      align-items: center;
      border-radius: .4rem;
      img{
        width: .4rem;
        height: .4rem;
        margin-left: .4rem;
      }
      input{
        flex:1;
        margin-left: .2rem;
      }
    }
  }
  .section{
    width: 100%;
    flex:1;
    flex-shrink: 1;
    overflow-y: auto;
    .main{
      width: 100%;
      display: flex;
      height: 100%;
      .tabs{
          width: 2.2rem;
          height: 100%;
          li{
            padding: .2rem 0;
            text-align: center;
          }
        }
        .conbox{
          width: 100%;
          height: 100%;
          background: #fff;
          ul{
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            li{
              width: 33.3%;
              padding: .1rem .1rem;
              dl{
              width: 100%;
              background: #f7f7f7;
              dt{
                  img{
                    width: 100%;
                    height: auto;
                  }
                }
                dd{
                  color: #999;
                  padding: .2rem 0;
                  text-align: center;
                }
              }
            }
          }
        }
    }
  }
}
</style>
