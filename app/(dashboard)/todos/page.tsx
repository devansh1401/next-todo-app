import db from '@/utils/db'
import TodoList from '@/components/TodoList'

const getTodos = async () => {
  //add an artficial delay to simulate a slow network
  await new Promise(resolve => setTimeout(resolve, 900));
    
  const todos = await db.todo.findMany()
  console.log(todos)
  return todos
}

const TodoPage = async () => {
  const todos = await getTodos()
  return (
    <div>
      <TodoList Todos={todos} />
    </div>
  )
}

export default TodoPage
