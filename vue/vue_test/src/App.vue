<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader />
                <MyList :todos='todos' />
                <MyFooter :todos='todos' />
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/myHeader.vue';
import MyFooter from './components/myFooter.vue';
import MyList from './components/myList.vue';
export default {
    components: { MyHeader, MyFooter, MyList },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
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
        this.$bus.$on('addTodo', (todoOjb) => {
            this.todos.unshift(todoOjb)
        }),
            //清除一个todo
            this.$bus.$on('delectTodo', (id) => {
                this.todos = this.todos.filter(todo => todo.id != id)
            })
        // 根据页面修改data中的done
        this.$bus.$on('changeDone', (id) => {
            this.todos.forEach(todo => {
                if (todo.id == id) {
                    todo.done = !todo.done
                }
            });
        })
        // 清空已选
        this.$bus.$on('clearDone', () => {
            this.todos = this.todos.filter(todo => !todo.done)
        })
    },
    beforeDestroy() {
        this.$bus.$unbind('addTodo')
        this.$bus.$unbind('delectTodo')
        this.$bus.$unbind('changeDone')
        this.$bus.$unbind('clearDone')
    }
}
</script>

<style>
/*base*/
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

.btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(25, 159, 212);
    margin-right: 5px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
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