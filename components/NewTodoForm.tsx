 "use client"
import { useState } from "react"

const NewTodoForm = () => {
  const [todo, setTodo] = useState("")
  return (
    <form>
      <input
        type="text"
        value={todo}
        placeholder="Enter a new todo"
        onChange={(e) => setTodo(e.target.value)}
        className="flex-grow px-2 py-1 border rounded border-gray-300"
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors">Add Todo</button>
    </form>
  )
}

export default NewTodoForm
