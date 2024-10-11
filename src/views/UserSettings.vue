<template>
  <div class="settings-container">
    <div class="header">
      <h1>Cài đặt người dùng</h1>
    </div>
    <div class="content">
      <div class="section">
        <h2>Thông tin cá nhân</h2>
        <form>
          <label for="name">Tên:</label>
          <input type="text" id="name" v-model="userName" />
          <br />
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userEmail" />
        </form>
      </div>
      <div class="section">
        <h2>Tùy chọn</h2>
        <form>
          <label for="dark-mode">Dark Mode:</label>
          <input type="checkbox" id="dark-mode" v-model="darkMode" />
          <br />
          <label for="language">Ngôn ngữ:</label>
          <select id="language" v-model="language">
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSettings',
  data() {
    return {
      userName: '',
      userEmail: '',
      darkMode: false,
      language: 'vi'
    }
  }
}
</script>

<style scoped>
.settings-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.header h1 {
  margin: 0;
}

.content {
  padding: 20px;
}

.section {
  margin-bottom: 20px;
}

.section h2 {
  margin-top: 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  margin-bottom: 10px;
}

input[type="text"], input[type="email"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

input[type="checkbox"] {
  margin-right: 10px;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}
</style>