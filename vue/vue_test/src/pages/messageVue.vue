<template>
    <div>
        <ul>
            <li v-for="m in messageList">
                <router-link :to="{
                    name: 'xiangqing',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                    <button @click="push(m)">push查看</button>
                    <button @click="replace(m)">replace查看</button>
                </router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'messageVue',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' }
            ]
        }
    },
    methods: {
        push(m) {
            this.$router.push({
                name: 'xiangqing',
                params: {
                    id: m.id,
                    title: m.title
                }
            })
        },
        replace(m) {
            this.$router.replace({
                name: 'xiangqing',
                params: {
                    id: m.id,
                    title: m.title
                }
            })
        }
    },
}
</script>

<style>
</style>