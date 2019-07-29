import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',

      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/search',
      name: 'search',

      component: () => import(/* webpackChunkName: "about" */ './components/Search.vue')
    },
    {
      path: '/fulllist',
      name: 'fulllist',

      component: () => import(/* webpackChunkName: "about" */ './components/Fulllist.vue')
    },
    {
      path: '/list',
      name: 'list',

      component: () => import(/* webpackChunkName: "about" */ './components/list.vue')
    },
    {
      path: '/character/id',
      name: 'character',

      component: () => import(/* webpackChunkName: "about" */ './components/Character.vue')
    },
    {
      path: '/Intro',
      name: 'intro',
      component: () => import(/* webpackChunkName: "about" */ './components/Intro.vue')
    }

  ]
})
