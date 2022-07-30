<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<School-info ref="sch"></School-info>
		<button ref="btn" @click="showDom">点我输出上方DOM</button>
	</div>
</template>

<script>
import SchoolInfo from './compoents/SchoolInfo.vue'
export default {
	name: 'App',
	data() {
		return {
			msg: "王秀梅是傻逼"
		}
	},
	components: { SchoolInfo },
	methods: {
		showDom() {
			console.log(this.$refs.title);//获得schooinfo组件的实例对象
			console.log(this.$refs.sch);
			console.log(this.$refs.btn);
		}
	},
}
</script>

<style>
</style>