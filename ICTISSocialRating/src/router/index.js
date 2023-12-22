import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),
      children: [
        {
          path: '',
          name: 'myrating',
          component: () => import('../views/MyRatingView.vue'),
        },
        {
          path: 'myevents',
          name: 'myevents',
          component: () => import('../views/MyEventsView.vue'),
        }
      ]
    },
    {
      path: '/event',
      props: true,
      children: [
        {
          path: '',
          name: 'allevents',
          component: () => import('../views/AllEventsView.vue'),
        },
        {
          path: ':id',
          name: 'event',
          props: true,
          component: () => import('../views/EventView.vue'),
        }
      ]
    }
  ]
})

export default router
