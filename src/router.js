import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./views/HomePage.vue")
    },
    {
      path: "/register",
      component: () => import("./views/RegisterPage")
    },
    {
      path: "/login",
      component: () => import("./views/LoginPage.vue")
    },
    {
      path: "/menu",
      component: () => import("./views/BeerPage.vue")
    },
    {
      path: "/about",
      component: () => import("./views/AboutPage.vue")
    },
    {
      path: "/contact",
      component: () => import("./views/ContactPage.vue")
    },
    {
      path: "/profile",
      component: () => import("./views/UserProfilePage"),
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/cart",
      component: () => import("./views/CartPage"),
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/games",
      component: () => import("./views/GamesPage"),
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/ranking",
      component: () => import("./views/RankingPage"),
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/currency",
      component: () => import("./views/CurrencyPage"),
      meta: {
        authorize: ["ROLE_USER"]
      }
    },
    {
      path: "/admin/orders",
      component: () => import("./admin-panel/OrderPage.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin/orders/current",
      component: () => import("./admin-panel/OrderInQueuePage.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin/raport",
      component: () => import("./admin-panel/RaportPage.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin/quiz",
      component: () => import("./admin-panel/QuizAdminEditPage.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin/quiz/:id",
      component: () => import("./admin-panel/QuizQuestionAdminPage.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin/quiz/answer/:id",
      component: () => import("./admin-panel/QuizQuestionAnswers.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin/menu",
      component: () => import("./admin-panel/BeerEditPage.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "/admin",
      component: () => import("./admin-panel/MainAdminPage.vue"),
      meta: {
        authorize: ["ROLE_ADMIN"]
      }
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta;
  if (authorize) {
    let user = store.getters.user;
    if (!user) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else if (
      !authorize.some(x => user.rolesDto.map(y => y["roleName"]).includes(x))
    ) {
      next("/");
    }
  }
  if (to.path === "/login" && store.getters.loggedIn === true) next("/");
  next();
});

export default router;
