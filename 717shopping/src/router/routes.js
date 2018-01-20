import search from '../views/search/search.vue';
import register from '../views/register/register.vue';
import login from '../views/login/login.vue';
import order from '../views/order/order.vue';
import all_order from '../views/order/all_order.vue'
import home from '../views/home/home.vue';
import particulars from '../views/particulars/particulars.vue';
import index from '../views/index/index.vue';
import classify from '../views/classify/classify.vue';
import cart from '../views/cart/cart.vue';
import myself from '../views/myself/myself.vue';
import address from '../views/address/address.vue';
import consignee from '../views/consignee/consignee.vue';
export default[
    {
        path: '/',
        redirect: 'index'
    },
    {
        name:'login',
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/search',
        component: search
    },
    {
        path: '/particulars',
        name: 'particulars',
        component: particulars
    },
    {
        path: '/address',
        name: 'address',
        component: address
    },
    {
        path: '/consignee',
        name: 'consignee',
        component: consignee
    },
    {
        path: '/order',
        name: 'order',
        component: order,
        children: [
            {
                path: 'all',
                component: all_order
            }
        ]
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {
                path: '',
                redirect: 'home'
            },
            {
                path: 'home',
                name: 'home',
                component: home
            },
            {
                path: 'classify',
                name: 'classify',
                component: classify
            },
            {
                path: 'cart',
                name: 'cart',
                component: cart
            },
            {
                path: 'myself',
                name: 'myself',
                component: myself,
                meta:{
                    requireAuth:true
                }
            }
        ]
    }
]