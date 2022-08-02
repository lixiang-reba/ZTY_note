<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<button @click="sendStuName">点我发送学生姓名</button>
	</div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
	name: 'StudentInfo',
	data() {
		return {
			name: '张三',
			sex: '男',
		}
	},
	methods: {
		sendStuName() {
			// this.$bus.$emit('showStuName', this.name)
			pubsub.publish('hello', 666)
		}
	},
}
</script>
<style scoped>
.student {
	background-color: blue;
	padding: 5px;
	margin-top: 5px;
}
</style>