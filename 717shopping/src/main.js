import Vue from 'vue'
import App from './App.vue'
import router from './router/config.js';
import axios from './http/axios.js';
import {store} from './store/store.js';
import MintUI from 'mint-ui'; 
import './assets/style.css';
import './assets/style.js';
import './libs/swiper.css';
import './libs/swiper.min.js';
import './assets/fonts/iconfont.css';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import message from './plugins/message';
Vue.use(message)
import loading from './plugins/loading/';
Vue.use(loading)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
