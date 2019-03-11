import Vue from 'vue'
import Router from 'vue-router'
import Browse from '@/views/Browse/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'browse/featured',
    },
    {
      path: '/browse/:by',
      name: 'browse',
      component: Browse,
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Search/index.vue'),
    },
  ],
})
