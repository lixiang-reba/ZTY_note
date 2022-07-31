<template>
	<div class="app">
		<h1>{{ msg }}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<SchoolInfo :getSchoolName='getSchoolName' />
		<hr>
		<!-- 通过父组件给子组件绑定一个自定义事件：子给父传递数据(第一种写法：使用@或v-on)-->
		<StudentInfo v-on:atguigu="getStudentName" @demo='m1' />
		<!-- 通过父组件给子组件绑定一个自定义事件：子给父传递数据(第二种写法：使用ref)-->
		<!-- 这种方法更加灵活 可以过一会儿再绑定事件 -->
		<!-- <StudentInfo ref="student" /> -->
	</div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo'
import StudentInfo from './components/StudentInfo'
export default {
	name: 'App',
	components: { SchoolInfo, StudentInfo },
	data() {
		return {
			msg: '你好啊'
		}
	},
	methods: {
		getSchoolName(name) {
			console.log('App收到了学校名：', name);
		},
		getStudentName(name, ...params) {
			console.log('App收到了学生名：', name, params);
		},
		m1() {
			console.log('demo事件被触发了！');
		}
	},
	mounted() {
		// 绑定自定义事件
		/* setTimeout(() => {
			this.$refs.student.$on('atguigu', this.getStudentName)
		}, 3000); */
		// 绑定自定义事件（一次性）
		// this.$refs.student.$once('atguigu', this.getStudentName)
		// setTimeout(() => {
		// 	this.$destroy()
		// }, 5000);
	},
}
</script>
<style scoped>
.app {
	background-color: #ddd;
	padding: 5px;
}
</style>
