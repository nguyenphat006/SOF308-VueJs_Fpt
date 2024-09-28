<template>
  <div class="row">
    <div class="col-md-6">
      <form @submit.prevent="submitForm">    
        <h3>Thêm học sinh</h3>
        <div class="mt-3 mb-3">
          <label>Họ tên:</label>
          <input v-model="userInfo.name" type="text" placeholder="Nhập họ và tên..." class="form-control">
        </div>
        <div class="mb-3">
          <label>Email:</label>
          <input v-model="userInfo.email" type="text" placeholder="Nhập email..." class="form-control">
        </div>
        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input v-model="userInfo.password" type="password" placeholder="Nhập mật khẩu..." class="form-control">
        </div>
        <div class="mb-3">
          <label>Ngày sinh:</label>
          <input v-model="userInfo.dob" type="date" class="form-control">
        </div>
        <div class="mb-3">
          <label>Giới tính:</label>
          <input v-model="userInfo.gender" type="radio" value="Nam"> Nam
          <input v-model="userInfo.gender" type="radio" value="Nữ"> Nữ
        </div>
        <div class="mb-3">
          <label>Ngôn ngữ ưa thích:</label><br>
          <input type="checkbox" v-model="userInfo.languages" value="HTML"> HTML
          <input type="checkbox" v-model="userInfo.languages" value="CSS"> CSS
          <input type="checkbox" v-model="userInfo.languages" value="JavaScript"> JavaScript
        </div>
        <button type="submit" class="btn btn-primary">Đăng ký</button>
      </form>
    </div>

    <div class="col-md-6">
      <div class="info-display mt-4 p-3 bg-dark text-white rounded" v-if="submitted">
        <h3>Thông tin đã đăng ký:</h3>
        <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
        <p><strong>Ngày sinh:</strong> {{ userInfo.dob }}</p>
        <p><strong>Email:</strong> {{ userInfo.email }}</p>
        <p><strong>Giới tính:</strong> {{ userInfo.gender }}</p>
        <p><strong>Ngôn ngữ ưa thích:</strong> {{ userInfo.languages.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        languages: [] // Array to store multiple selected languages
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.submitted = true; // Mark the form as submitted to show the info
    }
  }
};
</script>

<style>
/* You can add custom CSS here */
</style>
