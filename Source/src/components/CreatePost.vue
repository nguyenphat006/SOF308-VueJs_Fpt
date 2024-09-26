<template>
    <div>
        <h2 class="mt-3">Tạo bài viết mới</h2>
        <input class="mb-2" v-model="title" placeholder="Tiêu đề bài viết">
        <input class="mb-2" v-model="author" placeholder="Tên tác giả">
        <textarea  class="mb-2" v-model="content" placeholder="Nội dung bài viết"></textarea>
        <button class="rounded" @click="submitPost">Đăng bài</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const emit = defineEmits(['add-post'])
    const title = ref('')
    const content = ref('')
    const author = ref('')

    function submitPost(){
        if (title.value && content.value && author.value) {
            const newPost = {
                title: title.value,
                content: content.value,
                author: author.value
            }
            emit('add-post', newPost)

            title.value = ''
            content.value = ''
            author.value = ''   
        }
    }
</script>

<style>
    input,textarea{
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
    }
    button{
        padding: 10px 20px;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>