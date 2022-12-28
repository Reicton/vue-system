import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home';
import User from '@/views/User';
import Layout from '@/views/Layout';
import Mall from '@/views/Mall';
import PageOne from '@/views/PageOne';
import PageTwo from '@/views/PageTwo';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect:'/home',
        component: Layout,
        children: [
            {
                path: 'home',
                component: Home
            },
            {
                path: 'user',
                component: User
            },
            {
                path: 'mail',
                component: Mall
            },
            {
                path: 'pageOne',
                component: PageOne
            },
            {
                path: 'pageTwo',
                component: PageTwo
            },
        ]
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router