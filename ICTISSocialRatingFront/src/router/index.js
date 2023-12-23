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
      component: () => import('../views/AccountView.vue'),
      meta: {
        requredLogin: true
      },
      children: [
        {
          path: '',
          name: 'myrating',
          meta: {
            requredLogin: true
          },
          component: () => import('../views/MyRatingView.vue'),
        },
        {
          path: 'myevents',
          name: 'myevents',
          meta: {
            requredLogin: true
          },
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

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

router.beforeEach((to, from, next) => {
  if(to.meta.requredLogin && !getCookie('token')){
      next({
          name: "login"
      })
  }
  else if ((to.name == 'login') && getCookie('token')) {
      next({
          name: "myrating"
      })
  }
  else next()
})

export default router
