<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader />
                <MyList :todos=todos />
                <MyFooter :todos=todos />
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';
import { nanoid } from 'nanoid';
export default {
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    // 浏览器本地存储
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    },
    mounted() {
        // 添加一个todo
        this.$bus.$on('addTodo', (title) => {
            this.todos.unshift({ id: nanoid(), name: title, status: 0, isEdit: 0 })
        })
        // 删除一个todo
        this.$bus.$on('deleteTodo', (todoId) => {
            this.todos = this.todos.filter((todo) => todo.id != todoId)
        })
        // 清除已完成任务
        this.$bus.$on("clearDone", (todos) => {
            this.todos = this.todos.filter(todo => !todo.status)
        })
        // 编辑todo
        this.$bus.$on("editTodo", (todoId) => {
            this.todos.forEach((todo) => {
                if (todo.id == todoId) {
                    todo.isEdit = 1
                    return
                }
            })
        })
        // 保存编辑
        this.$bus.$on("saveEdit", (todoId, title) => {
            this.todos.forEach((todo) => {
                if (todo.id == todoId) {
                    todo.isEdit = 0
                    todo.name = title
                    return
                }
            })
        })
        // 勾选or取消勾选
        this.$bus.$on("changeDone", (id) => {
            this.todos.forEach(todo => {
                if (todo.id == id) {
                    todo.status = !todo.status
                    return
                }
            })
        })
    },
    beforeDestroy() {
        this.$bus.$off('addTodo')
        this.$bus.$off('deleteTodo')
        this.$bus.$off('clearDone')
        this.$bus.$off('editTodo')
        this.$bus.$off('saveTodo')
        this.$bus.$off('changeDone')
    },
}
</script>

<style>
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>