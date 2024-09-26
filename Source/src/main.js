import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // Import router từ file router/index.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
app.use(router); // Sử dụng router trong ứng dụng
app.mount('#app');
