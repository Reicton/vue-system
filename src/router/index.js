import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
import Layout from '@/views/Layout';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: Layout,
        children:[
            {
                path:'home',
                component:Home
            },
            {
                path:'user',
                component:User
            },
        ]
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router