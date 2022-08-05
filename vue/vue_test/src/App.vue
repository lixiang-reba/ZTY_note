<template>
    <div id="root">

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    methods: {
        getStudents() {
            axios.get('http://localhost:5000/students').then
        }
    },
}
</script>

