import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top' 
import Company from '@/pages/Company' 
import Works from '@/pages/Works' 
import Links from '@/pages/Links' 
import Contact from '@/pages/Contact' 
import About from '@/pages/About' 
import Vanilla from '@/pages/Vanilla' 
import Products from '@/pages/Products' 


Vue.use(Router)



export default new Router({
  // mode: 'history',  
  routes: [
    {
      path: '/',
      name: 'top', 
      component: Top 
    },
  
    {
      path: '/company',
      name: 'company', 
      component: Company 
    },
    {
      path: '/works',
      name: 'works',
      component: Works 
    },
    {
      path: '/links',
      name: 'links', 
      component: Links 
    },
    {
      path: '/contact',
      name: 'contact', 
      component: Contact 
    },
    {
      path: '/about',
      name: 'about', 
      component: About 
    },
    {
      path: '/vanilla',
      name: 'vanilla', 
      component: Vanilla 
    },
    {
      path: '/products',
      name: 'products', 
      component: Products 
    },
    {
      path: '*',
      component:Top,
      redirect: '/'
    },
  
  ]
})