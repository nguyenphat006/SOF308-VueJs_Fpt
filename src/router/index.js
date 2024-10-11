import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/MyHome.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import Login from '../views/UserLogin.vue'
import Dashboard from '../views/UserDashboard.vue'

const isAuthenticated = false;  // Biến giả lập xác thực

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'BlogList', component: BlogList },
    { path: '/blog/:id', name: 'BlogPost', component: BlogPost },
    { path: '/login', name: 'Login', component: Login },
    {
        path: '/dashboard', name: 'Dashboard', component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (isAuthenticated) next();
            else next('/login');
        }
    },
    {
        path: '/profile',
        component: UserProfile,
        children: [
            { path: 'info', component: { template: '<div>User Info</div>' } },
            { path: 'settings', component: { template: '<div>User Settings</div>' } }
        ]
    },
    { path: '/me', alias: '/profile' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
