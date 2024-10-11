<!-- Login.vue -->
<template>
  <div class="container">
    <div class="login-card">
      <h1 class="title">Đăng nhập</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Tên đăng nhập</label>
          <input type="text" id="username" v-model="username" required placeholder="Nhập tên đăng nhập" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input type="password" id="password" v-model="password" required placeholder="Nhập mật khẩu" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
        <button type="reset" class="btn btn-secondary">Reset</button>
      </form>
      <p class="register-link">Chưa có tài khoản? <router-link to="/register">Đăng ký</router-link></p>
    </div>
  </div>
</template>

<script>
import store from '../router/store.js'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Call your API or authentication logic here
      // For demonstration purposes, let's assume the login is successful
      if (this.username === 'admin' && this.password === 'password') {
        // Set isAuthenticated to true
        store.commit('setIsAuthenticated', true)
        // Redirect to dashboard
        this.$router.push('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #f9f9f9;
}

.login-card {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #337ab7;
  color: #fff;
}

.btn-secondary {
  background-color: #ddd;
  color: #333;
}

.register-link {
  font-size: 14px;
  color: #337ab7;
  text-align: center;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: #337ab7;
}

a:hover {
  color: #23527c;
}
</style>