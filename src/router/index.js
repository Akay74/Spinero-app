import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function loadView (component) {
  return () => import(`@/views/${component}.vue`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      component: loadView(`Home`),
      name: 'Home',
      path: '/'
    },
    {
      path: '/about',
      name: 'About',
      component: loadView(`About`)
    },
    {
      path: '/Men',
      name: 'Men',
      component: loadView(`Men`)
    },
    {
      path: '/Women',
      name: 'Women',
      component: loadView(`Women`)
    },
    {
      path: '/Latest_collections',
      name: 'LatestCollections',
      component: loadView(`LatestCollections`)
    }
  ]
})
