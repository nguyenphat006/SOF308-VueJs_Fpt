<template>
    <div class="container">
        <h1>Blog Post {{ postId }}</h1>
        <p>This is the content of the blog post with ID {{ postId }}.</p>
        <img :src="imgSrc" alt="" class="blog-post-image">
    </div>
</template>

<script>
export default {
    computed: {
        postId() {
            return this.$route.params.id;
        },
        imgSrc() {
            return this.$route.params.image;
        }
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.blog-post-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
}
</style>