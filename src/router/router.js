import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

import Catalog from "../components/catalog"
import Card from "../components/card";

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Card,
            props: true
        }
    ]
})

export default router;