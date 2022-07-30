<template>
    <div class="wxm">
        <h2>{{ name }}csb</h2>
        <h2>{{ myAge }}岁死了进{{ address }}</h2>
        <button @click="changeAge">修改接收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: 'DemoP',
    data() {
        return {
            address: '地狱',
            myAge: this.age
        }
    },
    methods: {
        changeAge() {
            this.myAge++
        }
    },
    // props: ['name', 'age']//简单声明接收
    // 接收的同时对数据进行类型限制
    /* props: {
        name: String,
        age: Number
    } */
    // 接收的同时对数据进行类型限制+默认值指定+必要性的限制
    props: {
        name: {
            type: String,
            require: true//name是必要的
        },
        age: {
            type: Number,
            default: 50//默认值
        }
    }
}
</script>

<style>
.wxm {
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>