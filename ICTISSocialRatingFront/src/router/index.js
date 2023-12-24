import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AccountView from '../views/AccountView.vue'
import MyRatingView from '../views/MyRatingView.vue'
import MyEventsView from '../views/MyEventsView.vue'
import OrganizerView from '../views/OrganizerView.vue'
import AdminView from '../views/AdminView.vue'
import AllEventsView from '../views/AllEventsView.vue'
import EventView from '../views/EventView.vue'

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
      component: LoginView,
    },
    {
      path: '/account',
      component: AccountView,
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
          component: MyRatingView,
        },
        {
          path: 'myevents',
          name: 'myevents',
          meta: {
            requredLogin: true
          },
          component: MyEventsView,
        },
        {
          path: 'organizer',
          name: 'organizer',
          meta: {
            requredLogin: true,
            mustBeOrganizer: true
          },
          component: OrganizerView,
        },
        {
          path: 'admin',
          name: 'admin',
          meta: {
            requredLogin: true,
            mustBeAdmin: true
          },
          component: AdminView,
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
          component: AllEventsView,
        },
        {
          path: ':id',
          name: 'event',
          props: true,
          component: EventView,
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
