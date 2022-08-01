<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<h2>当前求和为{{ number }}</h2>
		<button @click="add">点我number++</button>
		<button @click="sendStudentName">把学生名给App</button>
		<button @click="unbind">解绑atguigu事件</button>
		<button @click="death">销毁当前Student组件的实例(vc)</button>
	</div>
</template>

<script>
export default {
	name: 'StudentInfo',
	data() {
		return {
			name: '张三',
			sex: '男',
			number: 0
		}
	},
	methods: {
		add() {
			console.log('add回调被调用了');
			this.number++
		},
		sendStudentName() {
			// 触发当前实例上的事件。附加参数都会传给监听器回调。
			this.$emit('atguigu', this.name, 666, 7, 888)
			// this.$emit('demo')
		},
		unbind() {
			this.$off('atguigu')//解绑一个自定义事件
			// this.$off(['atguigu', 'demo'])//解绑多个自定义事件
			// this.$off()//解绑所有自定义事件
		},
		death() {
			this.$destroy()//销毁了当前Student组件的实例(vc)
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