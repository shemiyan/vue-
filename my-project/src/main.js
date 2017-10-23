// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.config.productionTip = false;
Vue.use(VueRouter);
// let app = Vue.extend(App);
// var router = new VueRouter({
//   routes: [
//     { path: '/goods', component: goods },
//     { path: '/ratings', component: ratings },
//     { path: '/seller', component: seller }
//   ]
// });
// new Vue({
//     el: '#app',
//   router: router,
//   render: h => h(app)
// });
// router.push('/seller');
// 定义路由
const routes = [
  {path: '/', component: goods},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
