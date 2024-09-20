<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <img :src="items[0].image" alt="Hình ảnh"/>
                    <div class="card-body">
                        <h3 class="card-title">{{ items[0].title }}</h3>
                        <p class="card-text">{{ items[0].content }}</p>
                        <button class="btn btn-info">Xem chi tiết</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img :src="items[1].image" alt="Hình ảnh"/>
                    <div class="card-body">
                        <h3 class="card-title">{{ items[1].title }}</h3>
                        <p class="card-text">{{ items[1].content }}</p>
                        <button class="btn btn-info">Xem chi tiết</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img :src="items[2].image" alt="Hình ảnh"/>
                    <div class="card-body">
                        <h3 class="card-title">{{ items[2].title }}</h3>
                        <p class="card-text">{{ items[2].content }}</p>
                        <button class="btn btn-info">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import img1 from '../assets/img1.jpg';
    import img1 from '../assets/img2.jpg';
    import img1 from '../assets/img3.jpg';
    const items = [
        {
            image: img1,
            title: 'Bài 1',
            content: 'Nội dung bài 1'
        },
        {
            image: img2,
            title: 'Bài 2',
            content: 'Nội dung bài 2'
        },
        {
            image: img3,
            title: 'Bài 3',
            content: 'Nội dung bài 3'
        }
    ]
</script>