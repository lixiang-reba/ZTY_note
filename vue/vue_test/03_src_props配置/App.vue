<template>
    <div>
        <DemoP name='wxm'></DemoP>
        <hr>
        <DemoP name='hzk' :age='41'></DemoP>
        <hr>
        <DemoP name='hxl' :age='51'></DemoP>
    </div>
</template>

<script>
import DemoP from './compoents/DemoP.vue'
export default {
    name: 'App',
    components: {
        DemoP,
    },
}
</script>

<style>
</style>