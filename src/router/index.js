import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
// import enterLogerGuard from './enter-loger.guard';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/user/:userId',
            name: 'user',
            // beforeEnter: enterLogerGuard,
            component: () => import(/* webpackChunkName: "user-management" */ '@/views/User.vue'),
            children: [
                {
                    path: 'posts',
                    name: 'userPosts',
                    component: () => import(/* webpackChunkName: "user-management" */ '@/views/UserPosts.vue'),
                },
            ],
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/Register.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue'),
        },
    ],
});
