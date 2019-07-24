import Vue from 'vue'
import Router from 'vue-router'
import dp from '@/components/dp.vue'
import research from '@/components/research.vue'
import Faculty from '@/components/Faculty.vue'
import events from '@/components/events.vue'
import lab from '@/components/lab.vue'
import contact from '@/components/contact.vue'
import gallery from '@/components/gallery.vue'
import event_page from '@/components/event_page.vue'
import coe from '@/components/coe.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dp',
      component: dp
    },
    {
      path: '/coe',
      name: 'coe',
      component: coe
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/event_page',
      name: 'event_page',
      component: event_page
    },
    {
      path: '/Faculty',
      name: 'Faculty',
      component: Faculty
    },
    {
      path: '/research',
      name: 'research',
      component: research
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/lab',
      name: 'lab',
      component: lab
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
  ]
})
