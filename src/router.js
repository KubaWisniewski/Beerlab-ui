import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "./login/LoginPage.vue";
import HomePage from "./login/HomePage.vue";
import RegisterPage from "./login/RegisterPage";
import UserProfilePage from "./user-pages/UserProfilePage";
import CartPage from "./user-pages/CartPage";
import MenuPage from "./user-pages/MenuPage";
import GamesPage from "./user-pages/GamesPage";
import RankingPage from "./user-pages/RankingPage";
import CurrencyPage from "./user-pages/CurrencyPage";
import AdminPage from "./admin-panel/Main-view-admin.vue";
import TestPage from "./user-pages/TestPage";
import OrderView from "./admin-panel/Order-view-admin.vue";
import BeerEditComponent from "./admin-panel/beer-edit-comonent.vue";
import { authentication } from "./store/authentication.module";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/register",
      component: RegisterPage
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/profile",
      component: UserProfilePage
    },
    {
      path: "/cart",
      component: CartPage
    },
    {
      path: "/menu",
      component: MenuPage
    },
    {
      path: "/games",
      component: GamesPage
    },
    {
      path: "/ranking",
      component: RankingPage
    },
    {
      path: "/currency",
      component: CurrencyPage
    },
    {
      path: "/test",
      component: TestPage
    },
    {
      path: "/admin/orders",
      component: OrderView
    },
    {
      path: "/admin/menu",
      component: BeerEditComponent
    },
    {
      path: "/admin",
      component: AdminPage,
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
/*
router.beforeEach((to, from, next) => {
  const { authorize } = to.meta;
  if (to.fullPath !== "/login" && to.fullPath !== "/register") {
    if (authentication.token == null) {
      next("/login");
    }
  }
  if (authorize && authorize.length) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!authorize.some(x => user.map(x => x["roleName"]).includes(x))) {
      next("/");
    }
  }
  next();
});
*/
export default router;
