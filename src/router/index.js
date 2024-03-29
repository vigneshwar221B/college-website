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
import index from '@/components/index.vue'
import overview from '@/components/overview.vue'
import facilities from '@/components/facilities.vue'
import management from '@/components/management.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/management',
      name: 'management',
      component: management
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: facilities
    },
    {
      path: '/overview',
      name: 'overview',
      component:overview
    },
    {
      path: '/coe',
      name: 'coe',
      component: coe
    },
    {
      path: '/',
      name: 'dp',
      component: dp
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
