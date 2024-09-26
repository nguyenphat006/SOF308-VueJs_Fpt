<template>
    <div class="row">
        <form @submit.prevent="submitForm" class="col-sm-4">
            <h3>Thêm học sinh</h3>
            <div class="mt-3 mb-3">
                <label for="name">Họ và tên:</label>
                <input type="text" class="form-control" v-model="student.name" id="name" required/>
            </div>
            <div class="mb-3">
                <label for="name">Điểm:</label>
                <input type="number" min="0" max="10" class="form-control" v-model="student.score" id="score" required/>
            </div>
            <div class="mb-3">
                <label for="name">Ngày sinh:</label>
                <input type="date" class="form-control" v-model="student.dob" id="dob" required/>
            </div>
            <button type="submit" class="btn btn-success">{{ isEditing ? 'Cập nhật' : 'Thêm'}}</button>
        </form>

        <div class="col-sm-8">
            <h3>Danh sách học sinh:</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Điểm</th>
                        <th>Ngày sinh</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stu, index) in students" :key="index">
                        <td>{{ stu.name}}</td>
                        <td>{{ stu.score}}</td>
                        <td>{{ stu.dob}}</td>
                        <td>
                            <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    // Dữ liệu mẫu
    const students = ref([
        {name: 'Nguyễn Đăng Phát', score: 10, dob: '2006-05-15' },
        {name: 'Lê Văn Luyện', score: 2, dob: '1999-08-20' }
    ]);

    const student = ref({
        name: '',
        score: null,
        dob: ''
    })

    function resetForm(){
        student.value = {
            name: '',
            score: null,
            dob: ''
        }
    }

    let isEditing = ref(false);
    let editingIndex = ref(null);
    
    
     function submitForm(){
        if (isEditing.value) {
            students.value[editingIndex.value] = { ...student.value }  // Sửa lỗi cập nhật
            isEditing.value = false
            editingIndex.value = null
        }
        else{
            students.value.push({ ...student.value })  // Sửa lỗi thêm học sinh
        }
        resetForm();
    }
    function editStudent(index){

        student.value = {...students.value[index]}
        isEditing.value = true
        editingIndex.value = index
    }

    function deleteStudent(index){
        students.value.splice(index, 1)
    }
    
</script>