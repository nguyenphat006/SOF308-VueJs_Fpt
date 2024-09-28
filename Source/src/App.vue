<script setup>
import  { ref } from 'vue';
import Login from "./components/Login.vue";
import Comment from "./components/Comment.vue";
// import LAB from './components/Bai1.vue'


const isLoggedIn = ref(false);
const loggedInUser = ref('');

function handleLoginSuccess(userName) {
  loggedInUser.value = userName;
  isLoggedIn.value = true;
}
</script>

<template>
  <!-- <LAB/> -->
  <div>
    <login v-if="!isLoggedIn" @LoggedIn="handleLoginSuccess"/>
    <comment v-else :userName="loggedInUser"/>
  </div>

</template>

<style scoped>

</style>
