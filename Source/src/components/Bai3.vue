<template>
   <div class="row">
     <div class="col-sm-12">
        <h1>Thông tin cá nhân</h1>
        <form>
            <div class="mb-3">
                <label>Họ và tên:</label>
                <input v-model="userInfo.name" type="text" class="form-control" placeholder="Nhập họ và tên">
            </div>
            <div class="mb-3">
                <label>Tuổi:</label>
                <input v-model="userInfo.age" type="text" class="form-control" placeholder="Nhập tuổi">
            </div>
            <div class="mb-3">
                <label>Email:</label>
                <input v-model="userInfo.email" type="text" class="form-control" placeholder="Nhập email">
            </div>  
        </form>
        <div class="info-display mt-4 p-3 bg-dark text-white rounded">
            <h2>Thông tin đã nhập:</h2>
            <p><strong>Họ và tên:</strong> {{ userInfo.name }}</p>
            <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
            <p><strong>Email:</strong> {{ userInfo.email }}</p>
        </div>
    </div>
   </div>
</template>
<script setup>
import { reactive } from 'vue'

const userInfo = reactive({
    name: '',
    age: null,
    email: ''
});
</script>
