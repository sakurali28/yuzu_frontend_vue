import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

import UsersShow from "../views/UsersShow.vue";
import UsersEdit from "../views/UsersEdit.vue";

import RecipesIndex from "../views/RecipesIndex.vue";
import RecipesNew from "../views/RecipesNew.vue";
import RecipesShow from "../views/RecipesShow.vue";
import RecipesEdit from "../views/RecipesEdit.vue";

import TagsShow from "../views/TagsShow.vue";

import BookmarksIndex from "../views/BookmarksIndex.vue";
import BookmarksNew from "../views/BookmarksNew.vue";

import RecipeTagsNew from "../views/RecipeTagsNew.vue";

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
    path: "/tags/:id",
    name: "tags-show",
    component: TagsShow,
  },
  {
    path: "/users",
    name: "users-show",
    component: UsersShow,
  },
  {
    path: "/users/edit",
    name: "users-edit",
    component: UsersEdit,
  },
  {
    path: "/bookmarks",
    name: "bookmarks-index",
    component: BookmarksIndex,
  },
  {
    path: "/bookmarks/new",
    name: "bookmarks-new",
    component: BookmarksNew,
  },
  {
    path: "/recipes/:id/addtag",
    name: "recipeTag-new",
    component: RecipeTagsNew,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
