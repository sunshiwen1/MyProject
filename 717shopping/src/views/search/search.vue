<template>
  <div class="search">
      <header class="header">
          <div class="searchbox">
              <img src="../../assets/homeImg/serach.png" alt="">
              <input type="text" placeholder="请输入您要购买的商品" v-model.trim="product_name">
          </div>
          <span @click="search_change">搜索</span>
      </header>
      <section class="section">
          <div class="lately">
              <span>最近搜索</span>
              <i class="iconfont" @click="clear_search">&#xe728;</i>
          </div>
          <p v-if="searchHistoryList.length == 0" class="empty">暂无搜索记录...</p>
          <div v-else class="food">
              <div v-for="(v, i) in searchHistoryList" :key="i" class="food-item"><span>{{v}}</span></div>
          </div>
          <h4>大家都在搜</h4>
          <div class="food-bot">
              <a><span>粽子</span> </a>
              <a><span>锅巴</span></a>
              <a><span>酱</span></a>
              <a><span>小吃</span></a>
              <a><span>零食</span></a>
              <a><span>干果</span></a>
              <a><span>特产</span></a>
              <a><span>油</span></a>
              <a><span>大米</span></a>
              <a><span>面粉</span></a>
          </div>
      </section>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'search',
    data: () => {
        return {
            product_name: '',
            searchHistoryList: []
        };
    },
    mounted () {
        this.getHistory();
        console.log(this.searchHistoryList.length);
    },
    methods: {
        search_change () {
            if (!this.product_name) return;
            let ls = localStorage;
            let shistory = ls.getItem('searchHistory');
            if (!shistory) {
                ls.setItem('searchHistory', JSON.stringify([this.product_name]));
            } else {
                let newHistory = JSON.parse(shistory);
                newHistory.unshift(this.product_name);
                newHistory = _.uniq(newHistory);
                ls.setItem('searchHistory', JSON.stringify(newHistory));
            }
            this.getHistory();
        },
        getHistory () {
            this.product_name = '';
            let ls = localStorage;
            this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'));
        },
        clear_search () {
            let ls = localStorage;
            ls.clear();
            this.searchHistoryList = [];
        }
    }
}
</script>

<style scoped lang="scss">
.search{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    .header{
        width: 100%;
        height: 1rem;
        display: flex;
        background: #fff;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 0 .2rem;
        flex-shrink: 0;
        .searchbox{
            flex:1;
            height: .65rem;
            background: #f5f5f5;
            display: flex;
            align-items: center;
            margin-right: .2rem;
            img{
                width: .24rem;
                height: .24rem;
                margin-left: .2rem;
            }
            input{
                margin-left: .2rem;
                flex:1;
            }
        }
    }
    .section{
        width: 100%;
        flex-shrink: 1;
        flex: 1;
        overflow-y: auto;
        .lately{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .25rem .25rem;
        }
        .empty{
            padding-left: .2rem;
        }
        .food{
            width: 100%;
            height: 1.8rem;
            padding: 0 .2rem;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            .food-item{
                display: flex;
                padding-right:.3rem;
                height: .8rem;
                span{
                    height: .6rem;
                    padding: 0 .3rem;
                    line-height: .6rem;
                    border: 1px solid #ccc;
                    border-radius: .05rem;
                }
            }
        }
        h4{
            width: 100%;
            padding: .25rem .2rem;
            font-weight: normal;
        }
        .food-bot{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 0 .2rem;
            a{
                display: flex;
                padding-right:.3rem;
                height: .8rem;
                span{
                    height: .6rem;
                    padding: 0 .3rem;
                    line-height: .6rem;
                    border: 1px solid #ccc;
                    border-radius: .05rem;
                }
            }
        }
    }
}
</style>
