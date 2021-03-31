import Vue from "vue";
import VueRouter from "vue-router";
// import NotFound from "../views/NotFound.vue";
import OrderPage from "../views/OrderPage.vue";
import Success from "../views/Success.vue";
import Delivery from "../components/Delivery.vue";
import Payment from "../components/Payment.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/order",
    name: "OrderPage",
    component: OrderPage,
    redirect: { name: "Delivery" },
    children: [
      {
        path: "delivery",
        name: "Delivery",
        component: Delivery,
      },
      {
        path: "payment",
        name: "Payment",
        component: Payment,
      },
    ]
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "*",
    redirect: { name: "OrderPage" }
    // name: "NotFound",
    // component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "text-gray-800"
});

export default router;
