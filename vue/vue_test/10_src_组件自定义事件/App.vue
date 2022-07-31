<template>
	<div class="app">
		<h1>{{ msg }},学生姓名是:{{ studentName }}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<SchoolInfo :getSchoolName='getSchoolName' />
		<hr>
		<!-- 通过父组件给子组件绑定一个自定义事件：子给父传递数据(第一种写法：使用@或v-on)-->
		<!-- <StudentInfo v-on:atguigu="getStudentName" @demo='m1' /> -->
		<!-- 通过父组件给子组件绑定一个自定义事件：子给父传递数据(第二种写法：使用ref)-->
		<!-- 这种方法更加灵活 可以过一会儿再绑定事件 -->
		<!-- 如果要给组件绑定原生事件要加native 否则将当作自定义事件处理 -->
		<StudentInfo ref="student" @click.native='show' />
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
			msg: '你好啊',
			studentName: ''
		}
	},
	methods: {
		getSchoolName(name) {
			console.log('App收到了学校名：', name);
		},
		getStudentName(name, ...params) {
			console.log('App收到了学生名：', name, params);
			this.studentName = name
		},
		m1() {
			console.log('demo事件被触发了！');
		},
		show() {
			alert(11)
		}
	},
	mounted() {
		// 绑定自定义事件
		this.$refs.student.$on('atguigu', this.getStudentName) //如果直接定义回调函数 需要写成箭头函数 否则this将指向stu组件的vc
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
