<template>
    <div>
        <StudentInfo></StudentInfo>
        <SchoolInfo></SchoolInfo>
    </div>
</template>

<script>
import StudentInfo from "./compoents/StudentInfo";
import SchoolInfo from "./compoents/SchoolInfo";
export default {
    name: 'App',
    components: {
        StudentInfo, SchoolInfo
    }
}
</script>

<style>
</style>