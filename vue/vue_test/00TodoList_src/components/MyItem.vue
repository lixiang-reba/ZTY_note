<template>
    <li>
        <label>
            <input type="checkbox" :checked=todo.status @change="changeDone" />
            <span v-show="!this.todo.isEdit">{{ todo.name }}</span>
            <input type="text" v-show="this.todo.isEdit" :value="todo.name" ref="ipt" @blur="saveEdit(todo, $event)">
        </label>
        <button class="btn btn-danger" @click="deleteTodo">删除</button>
        <button class="btn btn-edit" @click="editTodo">编辑</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        deleteTodo() {
            this.$bus.$emit('deleteTodo', this.todo.id)
        },
        editTodo() {
            this.$bus.$emit('editTodo', this.todo.id)
            // DOM更新后再获取焦点
            this.$nextTick(function () {
                this.$refs.ipt.focus()
            })
        },
        saveEdit(todo, e) {
            this.$bus.$emit('saveEdit', todo.id, e.target.value)
        },
        changeDone() {
            this.$bus.$emit('changeDone', this.todo.id)
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

input {
    height: 20px;
}
</style>