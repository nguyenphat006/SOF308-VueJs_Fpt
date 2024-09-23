<script setup>
// import Bai1 from './components/Bai3.vue'

import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

  const posts = ref([])
  function addPost(post){
    posts.value.push(post)
  }
</script>

<template>
 <!-- <Bai1></Bai1> -->
  <div class="app">
    <h1>Ứng dụng Blog nhỏ với vue.js</h1>
    <CreatePost @add-post="addPost"/>
    <PostList :posts="posts"/>
  </div>
</template>

<style>
  #app{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
