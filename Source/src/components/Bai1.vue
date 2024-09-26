<template>
    <div class="container">
        <h3>Nhập điểm của bạn:</h3>
        <input type="text" v-model.number="score"/>
        <p v-if="score < 1 || score > 10" style="color: red">Vui lòng nhập điểm trong khoảng 1 đến 10</p>
        <p v-else-if="score < 5.0" style="color: red">Yếu</p>
        <p v-else-if="score < 6.5">Trung bình</p>
        <p v-else-if="score < 8.0">Khá</p>
        <p v-else>Giỏi</p>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const score = ref('1');
</script>
