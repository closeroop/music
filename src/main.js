import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import  store from  './store/vuex.js'
//import axios from 'axios/dist/axios'
import iView  from  'iview';
import './assets/css/reset.css'
import 'iview/dist/styles/iview.css';
Vue.use(VueResource)
Vue.use(iView);

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  console.log(to.meta.title);
  next();
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
