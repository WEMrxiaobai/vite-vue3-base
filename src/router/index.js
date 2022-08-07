import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../view/Home/index.vue"),
            children: []
        },
        {
            path: "/login",
            component: () => import("../view/Login/index.vue")
        },
        {
            path: "/demo",
            component: () => import("../view/demo/index.vue")
        },
        {
            path: "/vuexdemo",
            component: () => import("../view/VuexDemo/index.vue")
        }

    ]
})
export default router;