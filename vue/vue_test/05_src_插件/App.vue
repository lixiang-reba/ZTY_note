<template>
	<div>
		<SchoolInfo />
		<hr>
		<StudentInfo />
	</div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo'
import StudentInfo from './components/StudentInfo'
export default {
	name: 'App',
	components: { SchoolInfo, StudentInfo }
}
</script>
