<template>
    <ul>
        <li :style="{ opacity }">欢迎查看News</li>
        <li>news001</li> <input type="text" name="" id="">
        <li>news002</li> <input type="text" name="" id="">
        <li>news003</li> <input type="text" name="" id="">
    </ul>
</template>

<script>
export default {
    name: 'newsVue',
    data() {
        return {
            opacity: 1
        }
    },
    activated() {
        console.log('激活');
        this.timer = setInterval(() => {
            console.log('1');
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16);
    },
    deactivated() {
        console.log('失活');
        clearInterval(this.timer)
    },
}
</script>

<style>
</style>