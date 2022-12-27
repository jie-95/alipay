import Vue from 'vue'
import VueRouter from 'vue-router'
// import mingxi from '@/components/mingxi'
import purse from '../views/purse.vue'
import mingxi from '../views/mingxi.vue'
import withdraw from '../views/withdraw.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/purse',
    name: 'purse',
    component: purse
    // children: [
    //   {
    //     path: 'mingxi',
    //     name: 'mingxi',
    //     component: mingxi
    //   }
    // ]
  },
  {
    path: '/mingxi',
    name: 'mingxi',
    component: mingxi
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: withdraw
  }
]

const router = new VueRouter({
  routes
})

export default router
