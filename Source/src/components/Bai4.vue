<template>
    <div class="container mt-5">
        <h1 class="text-center mt-5 mb-5">Hội yêu thích xe Supper Car</h1>
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
    import img1 from '../assets/car1.jpg';
    import img2 from '../assets/car2.jpg';
    import img3 from '../assets/car1.jpg';
    const items = [
        {
            image: img1,
            title: 'Ferrari F8 Tributo',
            content: 'Ferrari F8 Tributo ra mắt vào năm 2019, là cái tên hoàn toàn mới được sử dụng phiên bản nâng cấp của Ferrari 488 GTB. Dù kế thừa 488 GTB nhưng Ferrari F8 Tributo có nhiều sự thay đổi mới mẻ về thiết kế lẫn khả năng vận hành so với người tiền nhiệm.'
        },
        {
            image: img2,
            title: 'Ferrari spider 488',
            content: 'Ferrari 488 là một mẫu siêu xe thể thao hạng trung của nhà sản xuất ô tô Ferrari nổi tiếng của Ý. Đây là bản nâng cấp của mẫu xe Ferrari 458 cũ.'
        },
        {
            image: img3,
            title: 'Ferrari F8 Tributo',
            content: 'Ferrari F8 Tributo ra mắt vào năm 2019, là cái tên hoàn toàn mới được sử dụng phiên bản nâng cấp của Ferrari 488 GTB. Dù kế thừa 488 GTB nhưng Ferrari F8 Tributo có nhiều sự thay đổi mới mẻ về thiết kế lẫn khả năng vận hành so với người tiền nhiệm.'
        }
    ]
</script>