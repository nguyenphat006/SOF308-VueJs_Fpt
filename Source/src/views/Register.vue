<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
// Import các hàm từ db.js
import { getUsers, addUser } from '../db/db.js';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      const users = getUsers(); // Lấy danh sách người dùng hiện có
      const userExists = users.find(user => user.email === this.email);

      if (userExists) {
        alert('Email đã tồn tại!');
      } else {
        // Thêm người dùng mới vào db
        addUser({
          name: this.name,
          email: this.email,
          password: this.password
        });
        alert('Đăng ký thành công!');
        this.$router.push('/login');
      }
    }
  }
};
</script>
