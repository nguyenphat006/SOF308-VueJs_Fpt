<template>
  <div class="container">
    <h1>Blog List</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="{ name: 'BlogPost', params: { id: post.id, image: post.image } }">
          {{ post.title }}
          <span class="post-id">(#{{ post.id }})</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     posts: [
        { id: 1, title: 'First Post', image: require('@/assets/project-1.png') },
        { id: 2, title: 'Second Post', image: require('@/assets/project-3.png') },
        ]
    };
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-top: 0;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.post-item:hover {
  background-color: #f0f0f0;
}

.post-item a {
  text-decoration: none;
  color: #337ab7;
}

.post-item a:hover {
  color: #23527c;
}

.post-id {
  font-size: 0.8em;
  color: #999;
}
</style>