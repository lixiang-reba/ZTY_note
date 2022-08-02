<template>
	<div class="school">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
	</div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
	name: 'SchoolInfo',
	data() {
		return {
			name: '尚硅谷atguigu',
			address: '北京',
		}
	},
	mounted() {
		/* this.$bus.$on('showStuName', (StuName) => {
			console.log(StuName);
		}) */
		this.pubId = pubsub.subscribe('hello', (msgName, data) => {
			console.log('有人发布了hello消息，hello消息回调执行了', msgName, data);
		})
	},
	beforeDestroy() {
		pubsub.unsubscribe(this.pubId)
		/* this.$bus.$off('showStuName') */
	},
}
</script>
<style scoped>
.school {
	background-color: red;
	padding: 5px;
	margin-top: 5px;
}
</style>