import Vue from "vue";
import VueRouter from "vue-router";
// routes.js
import TaskCreatePage from "./pages/TaskCreatePage.vue";
import TasksListPage from "./pages/TasksListPage.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: TasksListPage },
  { path: "/create", component: TaskCreatePage },
];

export default new VueRouter({
  routes,
});
