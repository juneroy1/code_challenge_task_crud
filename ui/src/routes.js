import Vue from "vue";
import VueRouter from "vue-router";
// routes.js
import TaskFormPage from "./pages/TaskFormPage.vue";
import TasksListPage from "./pages/TasksListPage.vue";
import LoginPage from "./pages/auth/LoginPage.vue";
import RegisterPage from "./pages/auth/RegisterPage.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: TasksListPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/create", component: TaskFormPage,meta: { requiresAuth: true } },
  { path: "/edit/:id", component: TaskFormPage, meta: { requiresAuth: true } },
];

const router = new VueRouter({
  routes,
});

// Add a navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('userToken');

  if (requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to the login page if not authenticated
  } else {
    next(); // Continue navigation
  }
});

export default router;
