import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import hello from '@/components/Hello'
import VIP from  '@/components/vip'
import Music from  '@/page/music/Music'

Vue.use(Router)


export default new Router({
  routes:[
    {
      path: '/',
      name: 'index',
      meta:{
        title:'主页'
      },
      component: resolve => require(['../components/index'], resolve),
    },
    {
      path: '/music',
      name: 'music',
      meta:{
        title:'音乐'
      },
      component: Music,
    },
    {
      path: '/hello/:id',
      meta:{
        title:'个人中心'
      },
      component: hello,
      children:[
        {
          meta:{
            title:'vip'
          },
          path:'vip',
          component:VIP,

        }
      ]
    }
  ]
})
