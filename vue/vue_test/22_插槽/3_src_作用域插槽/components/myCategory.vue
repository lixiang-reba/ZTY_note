<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 定义一个插槽 等着组件的使用者进行填充-->
        <slot :games="games">我是默认值，当使用者没有传递具体结构时，我会出现1</slot>
    </div>
</template>

<script>
export default {
    name: 'myCategory',
    props: ['title'],
    data() {
        return {
            games: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
        }
    },
}
</script>

<style>
.category {
    background-color: red;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: blue;
}
</style>