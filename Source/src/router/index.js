// Tạo cấu hình router với các route
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('currentUser'); // Kiểm tra người dùng đã đăng nhập chưa
    if (to.name !== 'Login' && to.name !== 'Register' && !isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  });
  