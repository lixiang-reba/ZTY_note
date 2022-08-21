<template>
    <div>
        <h3>编号：{{ id }}</h3>
        <h3>标题：{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'detailVue',
    props: ['id', 'title'],
    mounted() {
        console.log(this.$route);
    },
}
</script>

<style>
</style>