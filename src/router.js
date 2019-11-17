import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "./login/LoginPage.vue";
import HomePage from "./login/HomePage.vue";
import RegisterPage from "./login/RegisterPage";
import UserProfilePage from "./user-pages/UserProfilePage";
import CartPage from "./user-pages/CartPage";
import BeerPage from "./user-pages/beer/BeerPage.vue";
import GamesPage from "./user-pages/GamesPage";
import RankingPage from "./user-pages/RankingPage";
import CurrencyPage from "./user-pages/CurrencyPage";
import AdminPage from "./admin-panel/Main-view-admin.vue";
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
      component: UserProfilePage,
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/cart",
      component: CartPage,
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/menu",
      component: BeerPage
    },
    {
      path: "/games",
      component: GamesPage,
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/ranking",
      component: RankingPage,
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/currency",
      component: CurrencyPage,
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/admin/orders",
      component: OrderView,
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin/menu",
      component: BeerEditComponent,
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
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

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta;
  const user = JSON.parse(localStorage.getItem("user"));
  if (authorize) {
    if (!user) {
      return next({
        path: "/login"
      });
    }
    if (!authorize.some(x => user.map(x => x["roleName"]).includes(x))) {
      return next("/");
    }
  }
  next();
});

export default router;
