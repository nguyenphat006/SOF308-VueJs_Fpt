<!-- Dashboard.vue -->
<template>
  <div class="container">
    <div class="header">
      <h1>Dashboard</h1>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
    <div class="stats">
      <div class="stat">
        <i class="fas fa-user"></i>
        <p>Username: {{ username }}</p>
      </div>
      <div class="stat">
        <i class="fas fa-clock"></i>
        <p>Last Login: {{ lastLogin }}</p>
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <i class="fas fa-chart-bar"></i>
        <h2>Recent Activity</h2>
        <p>View your recent activity and progress</p>
        <button class="btn btn-secondary" @click="viewActivity">View</button>
      </div>
      <div class="card">
        <i class="fas fa-cog"></i>
        <h2>Account Settings</h2>
        <p>Update your account information and settings</p>
        <button class="btn btn-secondary" @click="editSettings">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  data() {
    return {
      username: 'John Doe',
      lastLogin: '2023-02-20 14:30:00'
    }
  },
  methods: {
    logout() {
      // logout logic here
    },
    viewActivity() {
      // view activity logic here
    },
    editSettings() {
      // edit settings logic here
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.stats {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.stat {
  margin: 20px;
}

.stat i {
  font-size: 24px;
  margin-right: 10px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 250px;
}

.card i {
  font-size: 24px;
  margin-right: 10px;
}

.card button {
  margin-top: 10px;
}
</style>