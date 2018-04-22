import Vue from 'vue'
import Router from 'vue-router'
import Submit from '@/components/Submit'
import About from '@/components/About'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
