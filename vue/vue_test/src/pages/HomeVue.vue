<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News
                    </router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message
                    </router-link>
                </li>
            </ul>
            <div>
                <keep-alive include="newsVue">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeVue',
    beforeDestroy() {
        console.log('home组件即将被销毁');
    },
    mounted() {
        console.log('home组件挂载成功');
        window.homeroute = this.$route
        window.homerouter = this.$router
    },
}
</script>

<style>
</style>