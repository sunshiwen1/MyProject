import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
Vue.use(VueRouter);
let router = new VueRouter({
    routes
});

// router.beforeEach((to,from,next)=>{
//     console.log(to.matched)
//     if(to.matched.some(record=>record.meta.requireAuth)){
//         next({name:'login',query:{
//             from:to.name
//         }})
//     }else{
//         next();
//     } 
// });

export default router;