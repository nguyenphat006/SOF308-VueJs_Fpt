<!-- Login.vue -->
<template>
  <div class="container">
    <h1>Đăng nhập</h1>
    <form @submit.prevent="login">
      <b-form-group label="Tên đăng nhập" label-for="username">
        <b-form-input id="username" v-model="username" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="Mật khẩu" label-for="password">
        <b-form-input id="password" v-model="password" type="password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Đăng nhập</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </form>
    <p>Chưa có tài khoản? <router-link to="/register">Đăng ký</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Xử lý đăng nhập ở đây
      console.log('Đăng nhập thành công!')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  margin-top: 20px;
}

button[type="submit"] {
  margin-top: 10px;
}

button[type="reset"] {
  margin-left: 10px;
}

p {
  margin-top: 20px;
  text-align: center;
}

a {
  text-decoration: none;
  color: #337ab7;
}

a:hover {
  color: #23527c;
}
</style>