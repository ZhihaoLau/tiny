import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const ScrollBarPage = resolve => require(['../routes/ScrollBarPage.vue'], resolve)
const CheckListPage = resolve => require(['../routes/CheckListPage.vue'], resolve)
const LazyLoadPage = resolve => require(['../routes/LazyLoadPage.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/scrollbar',
      component: ScrollBarPage
    },
    {
      path: '/checklist',
      component: CheckListPage
    },
    {
      path: '/lazyload',
      component: LazyLoadPage
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
