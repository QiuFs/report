import index from "../index";
import environment from "@/components/environment/environment";
import model from "@/components/model/model";
import shoppingCart from "@/components/shoppingCart/shoppingCart";
import spread from "@/components/spread/spread";
import shoppingcartAddData from "@/components/shoppingCart/shoppingcartAddData";
import spreadAddData from "@/components/spread/spreadAddData";
import {createRouter, createWebHashHistory} from "vue-router"
const routes =[
    {
        path: "/",
        redirect: '/environment'
    },
    {
        path: "/index",component: index
    },
    {
        path: "/environment",component: environment
    },
    {
        path: "/model",component: model
    },
    {
        path: "/shoppingCart",component: shoppingCart
    },
    {
        path: "/spread",component: spread
    },
    {
        path: "/spreadAddData", component: spreadAddData
    },
    {
        path: "/shoppingCartAddData",component: shoppingcartAddData
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router
