import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import isAdminLocalStorageGuard from './isadmin-localstorage.guard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
    beforeEnter: isAdminLocalStorageGuard,
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import(/* webpackChunkName: "vote" */ '../views/Vote.vue'),
    beforeEnter: isAdminLocalStorageGuard,
  },
  {
    path: '/score',
    name: 'score',
    component: () => import(/* webpackChunkName: "score" */ '../views/Score.vue'),
    beforeEnter: isAdminLocalStorageGuard,
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
