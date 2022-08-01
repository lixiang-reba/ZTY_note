<template>
	<div class="app">
		<h1>{{ msg }}</h1>
		<SchoolInfo />
		<StudentInfo />
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
}
</script>
<style scoped>
.app {
	background-color: #ddd;
	padding: 5px;
}
</style>
