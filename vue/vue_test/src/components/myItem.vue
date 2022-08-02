<template>
    <li>
        <label>
            <input type="checkbox" :checked='todo.done' @change="changeDone(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" :value="todo.title" v-show="todo.isEdit">
        </label>
        <button class="btn btn-danger" @click="delectTodo">删除</button>
        <button class="btn btn-edit" @click='editTodo(todo)'>编辑</button>
    </li>
</template>

<script>
export default {
    name: 'myItem',
    props: ['todo'],
    methods: {
        //清除一个todo
        delectTodo() {
            this.$bus.$emit('delectTodo', this.todo.id)
        },
        // 根据页面修改data中的done
        changeDone(id) {
            this.$bus.$emit('changeDone', id)
        },
        editTodo(todo) {
            this.$set(todo, 'isEdit', true)
        }
    },
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
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
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>