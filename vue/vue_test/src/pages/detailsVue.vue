<template>
    <div>
        <h3>编号：{{ $route.query.id }}</h3>
        <h3>标题：{{ $route.query.title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'detailVue',
    mounted() {
        console.log(this.$route);

    },
}
</script>

<style>
</style>