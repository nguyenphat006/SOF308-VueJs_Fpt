<template>
  <div class="user-info-container">
    <div class="user-info-header">
      <h1>Thông tin người dùng</h1>
    </div>
    <div class="user-info-content">
      <div class="user-info-avatar">
        <img src="../assets/project-1.png" alt="Avatar" />
      </div>
      <div class="user-info-details">
        <p>Tên người dùng: {{ userName }}</p>
        <p>Email: {{ userEmail }}</p>
        <p>Số điện thoại: {{ userPhone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      userName: 'Nguyễn Văn A',
      userEmail: 'nguyenvana@example.com',
      userPhone: '0901234567'
    }
  }
}
</script>

<style scoped>
.user-info-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-info-header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.user-info-header h1 {
  margin: 0;
}

.user-info-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.user-info-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
}

.user-info-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.user-info-details {
  margin: 10px;
}

.user-info-details p {
  margin: 10px 0;
}
</style>