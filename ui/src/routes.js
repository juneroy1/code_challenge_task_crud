import Vue from "vue";
import VueRouter from "vue-router";
// routes.js
import TaskFormPage from "./pages/TaskFormPage.vue";
import TasksListPage from "./pages/TasksListPage.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: TasksListPage },
  { path: "/create", component: TaskFormPage },
  { path: "/edit/:id", component: TaskFormPage },
];

export default new VueRouter({
  routes,
});
