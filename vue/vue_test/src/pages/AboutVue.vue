<template>
    <h2>我是About的内容</h2>
</template>

<script>

export default {
    name: 'AboutVue',
    beforeDestroy() {
        console.log('about组件即将被销毁');
    },
    mounted() {
        console.log('about组件挂载成功');
        window.aboutroute = this.$route
        window.aboutrouter = this.$router
    },
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem("school") == "atguigu1") {
                next();
            } else alert("无权限");
        } else {
            next();
        }
    },
    beforeRouteLeave(to, from, next) {
        next()
    }
}
</script>

<style>
</style>