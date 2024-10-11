<template>
  <div class="container mt-3">
    <h1>User Profile</h1>
    <nav class="nav-tabs">
      <router-link to="/profile/info" class="nav-link" :class="{ active: $route.path === '/profile/info' }">Info</router-link>
      <router-link to="/profile/settings" class="nav-link" :class="{ active: $route.path === '/profile/settings' }">Settings</router-link>
    </nav>
    <div class="tab-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.nav-link.active {
  color: #337ab7;
  border-bottom: 2px solid #337ab7;
  background-color: #f0f0f0; /* add a light gray background */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* add a subtle box shadow */
}
.nav-link:hover {
  background-color: #f0f0f0; /* add a light gray background on hover */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* add a subtle box shadow on hover */
}
.nav-tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav-link {
  color: #333;
  text-decoration: none;
  margin-right: 20px;
  font-size: large;
  font-weight:  600;
}

.nav-link.active {
  color: #337ab7;
  border-bottom: 2px solid #337ab7;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>