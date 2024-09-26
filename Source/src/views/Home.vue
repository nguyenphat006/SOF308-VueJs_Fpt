<template>
  <div class="container mt-5">
    <h2>Welcome, {{ currentUser.name }}</h2>
    <button @click="logout" class="btn btn-danger mt-3">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || {}
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('currentUser');
      this.$router.push('/login');
    }
  }
};
</script>
