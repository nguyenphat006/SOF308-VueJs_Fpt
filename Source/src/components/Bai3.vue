<template>
    <h1>{{ greeting }}</h1>
    <button v-bind:title="buttonTitle" @click="changeGreeting">Click Here</button>
</template>
<script>
    export default{
        data(){
            return{
                greeting: 'Chào mừng đến với VUEJS !',
                buttonTitle: 'Nhấn để thay đổi lời chào'
            };
        },
            methods:{
                changeGreeting(){
                    this.greeting = 'Chào tạm biệt và thân ái!';
                    this.buttonTitle = 'Lời chào đã được thay đổi';
                }
            }
    }
</script>