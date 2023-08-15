// src/router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Course from "@/components/Course";
import Login from "@/components/Login";
import NotFound from "@/components/NotFound"; // 导入Course组件

Vue.use(VueRouter);

const routes = [
    // 其他路由配置...

    {
        path: '/course',
        name: 'Course',
        component: Course, // 将Course组件配置为该路径的组件
    },
    {
        path:"/auth/login",
        name:"Login",
        component: Login
    },
    {
        path:"/notfound",
        name:"NotFound",
        component: NotFound
    },
    {
        path: '*',
        redirect: '/course'
    },
    // 更多路由配置...
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
