const { createApp, ref } = Vue

createApp({
    setup() {

        const todo = ref('')
        const todos = ref([{ id: 1, title: "hello madafaka", done: true }])

        const addTodo = () => {
            todos.value.push({ id: Math.floor(Math.random() * 100) + 1, title: todo.value, })
            todo.value = ''
        }
        const removeTodo = (id) => {
            todos.value = todos.value.filter(todo => todo.id !== id)

        }


        return {
            todo, addTodo, todos, removeTodo
        }
    }

}).mount('#app')