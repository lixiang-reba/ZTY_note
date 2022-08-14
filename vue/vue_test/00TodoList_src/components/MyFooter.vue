<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model='ckeckAll' />
        </label>
        <span>
            <span>已完成{{ haveDone }}</span> / 全部{{ todos.length }}
        </span>
        <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        // 统计已完成数目
        haveDone: {
            get() {
                return this.todos.reduce((pre, cur) => pre + (cur.status ? 1 : 0), 0)
            },
        },
        // 全部勾选or取消勾选
        ckeckAll: {
            get() {
                if (this.haveDone == this.todos.length) return true
                else return false
            },
            set(value) {
                this.todos.forEach(todo => todo.status = value)
            }
        }
    },
    methods: {
        clearDone() {
            this.$bus.$emit("clearDone", this.todos)
        }
    },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>