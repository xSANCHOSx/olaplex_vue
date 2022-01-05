import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

let routes = [
        {
            path: '/',
            name: 'catalog',
            component: () => import("../components/catalog"),
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import("../components/card"),
            props: true
        },
        {
            path: '/checkout',
            name: 'v-checkout',
            component: () => import("../components/v-checkout")
        },
        {  path: '/product/:id',
           name: 'ProductsCard',
           component: () => import("../components/products-card"),
           props: true
        },
        {  path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () =>  import("../components/not-found")
        }

    ]

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }

});