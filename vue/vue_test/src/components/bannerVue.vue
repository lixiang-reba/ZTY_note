<template>
    <div>
        <h1>这里是顶部</h1>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="go">测试一下go</button>
    </div>
</template>

<script>
export default {
    name: 'bannerVue',
    methods: {
        forward() {
            this.$router.forward()
        },
        back() {
            this.$router.back()
        },
        go() {
            this.$router.go(-2)
        },
    },
}
</script>

<style>
</style>