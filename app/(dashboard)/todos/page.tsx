import Todo from '@/components/Todo'
import db from '@/utils/db'
import TodoList from '@/components/TodoList'

const getTodos = async () => {
  const todos = await db.todo.findMany()
  console.log(todos)
  return todos
}

const TodoPage = async () => {
  const todos = await getTodos()
  return (
    <div>
      <h1> From Todos Page</h1>
      <TodoList Todos={todos} />
    </div>
  )
}

export default TodoPage
