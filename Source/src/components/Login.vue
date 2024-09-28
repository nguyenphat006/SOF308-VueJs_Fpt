<template>
  <div class="m-5 col-sm-3">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="userName">Tên đăng nhập:</label>
        <input class="form-control" type="text" id="userName" v-model="userName" placeholder="Nhập tên đăng nhập..." />
      </div>
      <div class="mb-3">
        <label for="password">Mật khẩu:</label>
        <input class="form-control" type="password" id="password" v-model="password" placeholder="Nhập mật khẩu..." />
      </div>
      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['LoggedIn'],
  setup(props, { emit }) {
    const userName = ref('');
    const password = ref('');

    function handleLogin() {
      if (userName.value && password.value) {
        emit('LoggedIn', userName.value);
      } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
      }
    }

    return {
      userName,
      password,
      handleLogin
    };
  }
};
</script>
