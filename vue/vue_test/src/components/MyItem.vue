<template>
    <li>
        <label>
            <input type="checkbox" v-model=todo.status />
            <span>{{ todo.name }}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        deleteTodo() {
            this.$bus.$emit('deleteTodo', this.todo.id)
        }
    },
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 50px;
    line-height: 40px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    /* display: none; */
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>