<template>
    <div class="col-sm-4 m-5">
        <h2>Bình luận bài viết</h2>
        <div class="card">
            <img src="../assets/person.jpg" alt="Hình ảnh"/>
            <div class="card-body">
                <h3 class="card-title">Hình ảnh người đàn ông da den</h3>
                <p class="card-text">Vào một ngày đẹp trời trên cánh đồng ánh hào quang rực rỡ có 1 người đang chơi
                    thì bỗng nhiên trời nắng nóng quá thành ra ông này da den 1 cửa hàng tạp hóa gần đó để mua chai nước.
                </p>
            </div>
        </div>
        <form @submit.prevent="submitComment">
            <div class="mt-3">
                <textarea name="" id="commentText" cols="60" v-model="commentText" placeholder="Hãy nhập bình luận của bạn"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Gửi bình luận</button>
        </form>
        <div v-if="comments.length" class="mt-3">
            <h5>Danh sách các bình luận:</h5>
            <ul style="list-style-type: circle;">
                <li v-for="(comment, index) in comments" :key="index">
                    <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { ref} from 'vue';
    const props = defineProps(['userName']);
    const commentText = ref('');
    const comments = ref([]);

    function submitComment() {
        if (commentText.value) {
            comments.value.push({
                name: props.userName,
                text: commentText.value
            });
            commentText.value = '';
        }
    }
</script>