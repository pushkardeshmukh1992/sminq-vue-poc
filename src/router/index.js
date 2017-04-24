import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FooComponent from '@/components/FooComponent'
import BarComponent from '@/components/BarComponent'
import titleComponent from '@/components/TitleComponent'

Vue.component('bs-title', titleComponent)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    { path: '/foo', component: FooComponent },
    { path: '/bar', component: BarComponent }
  ],
  mode: 'history'
})
