<template>
    <li>
        <label>
            <input type="checkbox" :checked='todo.done' @change="changeDone(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" :value="todo.title" v-show="todo.isEdit" @blur="exitEdit(todo, $event)" ref="input">
        </label>
        <button class="btn btn-danger" @click="delectTodo">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="editTodo(todo, $event)">编辑</button>
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
        // 添加编辑属性
        editTodo(todo, e) {
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }
            // nextTick指定的回调会在dom节点更新完毕之后再执行
            this.$nextTick(() => { this.$refs.input.focus() })
        },
        // 退出编辑状态and保存修改内容
        exitEdit(todo, e) {
            todo.isEdit = false
            if (!e.target.value.trim()) return alert('输入不能为空！')
            this.$bus.$emit('saveEdit', todo.id, e.target.value)
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