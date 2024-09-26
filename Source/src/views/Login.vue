<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
// Import các hàm từ db.js
import { getUsers } from '../db/db.js';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    loginUser() {
      const users = getUsers(); // Lấy danh sách người dùng từ db.js
      const user = users.find(user => user.email === this.email && user.password === this.password);

      if (user) {
        alert('Đăng nhập thành công!');
        this.$router.push('/');
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    }
  }
};
</script>
