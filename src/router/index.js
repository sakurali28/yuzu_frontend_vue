import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

import RecipesIndex from "../views/RecipesIndex.vue";
import RecipesNew from "../views/RecipesNew.vue";
import RecipesShow from "../views/RecipesShow.vue";
import RecipesEdit from "../views/RecipesEdit.vue";

import HashtagsIndex from "../views/HashtagsIndex.vue";
import HashtagsNew from "../views/HashtagsNew.vue";
import HashtagsShow from "../views/HashtagsShow.vue";
import HashtagsEdit from "../views/HashtagsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/recipes",
    name: "recipes-index",
    component: RecipesIndex,
  },
  {
    path: "/recipes/new",
    name: "recipes-new",
    component: RecipesNew,
  },
  {
    path: "/recipes/:id",
    name: "recipes-show",
    component: RecipesShow,
  },
  {
    path: "/recipes/:id/edit",
    name: "recipes-edit",
    component: RecipesEdit,
  },

  {
    path: "/hashtags",
    name: "hashtags-index",
    component: HashtagsIndex,
  },
  {
    path: "/hashtags/new",
    name: "hashtags-new",
    component: HashtagsNew,
  },
  {
    path: "/hashtags/:id",
    name: "hashtags-show",
    component: HashtagsShow,
  },
  {
    path: "/hashtags/:id/edit",
    name: "hashtags-edit",
    component: HashtagsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
