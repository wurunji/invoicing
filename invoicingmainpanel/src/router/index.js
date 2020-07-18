import Vue from 'vue'
import Router from 'vue-router'
import CommodityInfo from '../components/views/myview/CommodityInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommodityInfo',
      component: CommodityInfo
    }
  ]
})
