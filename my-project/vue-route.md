### vue-route

#### 1. css 

&  :父元素的意思。

```
& > a
  display: block;

```

  2.现在遇到一个问题，子模块没有渲染出来。代码是这样的：

```
//main.js
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.config.productionTip = false;
Vue.use(VueRouter);
let app = Vue.extend(App);
var router = new VueRouter({
  routes: [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ]
});
let vm = new Vue({
    el: '#app',
  router: router,
  render: h => h(app)
});
Vue.use({
  vm
});
router.push('/seller');

```

> ```
> //app.vue  原因在这里  
> <template>
>   <div id="app">
>      <v-header></v-header>
>     <div class = "tab">
>     <div class = "tab-item">
>      <a router-link= "{/goods}">商品</a>//vue-router 1.0 版本写法，已淘汰
>      <router-link  to= "/goods">商品</router-link>//vue-router 2.0 版本写法
>     </div>
>   <div class = "tab-item">
>    <a router-link= "{/ratings}">评论</a>//vue-router 1.0 版本写法，已淘汰
>     <router-link  to= "/ratings">评论</router-link>//vue-router 2.0 版本写法
>   </div>
>   <div class = "tab-item">
>    <a router-link= "{/seller}">商家</a>//vue-router 1.0 版本写法，已淘汰
>   <router-link  to= "/seller">商家</router-link>//vue-router 2.0 版本写法
>   </div>
>    </div>
>    <router-view></router-view>
>   </div>
> </template>
>
> <script>
> import header from './components/header/head.vue';
> import 'babel-polyfill';
> export default{
>   components: {
>     'v-header': header
>   }
> };
> </script>
> <style lang = "stylus" rel = "stylesheet/stylus">
>  #app
>   .tab
>    display: flex
>    width: 100%
>    height: 40px
>    line-height: 40px
>    .tab-item
>     flex: 1
>     text-align: center
>     & > a
>      display: block
>      font-size:14px
>      color:rgb(77, 85, 93)
>      &.active
>        color:rgb(255, 0, 0)  
> </style>
> ```

### 总结：应随时查看官网更新

https://router.vuejs.org/zh-cn/