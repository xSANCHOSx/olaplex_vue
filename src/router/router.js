import Vue from "vue"
import VueRouter from "vue-router"
import VueMeta from "vue-meta";

Vue.use(VueRouter);
Vue.use(VueMeta);

let routes = [
        {
            path: '/',
            name: 'catalog',
            component: () => import("../components/catalog/catalog")
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import("../components/card/card"),
            props: true
        },
        {
            path: '/checkout',
            name: 'v-checkout',
            component: () => import("../components/checkout/v-checkout")
        },
        {  path: '/product/:id',
           name: 'ProductsCard',
           component: () => import("../components/product/products-card"),
           props: true
        },
        {  path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () =>  import("../components/template-part/not-found")
        }

    ]

Vue.config.productionTip = false

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }

});
