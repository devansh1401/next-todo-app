// import { NewTodos } from "@/utils/actions"

// NewTodos
// const NewTodoForm = () => {
//   return (
//     <form action={NewTodos}>
//       <input name="content" type="text" placeholder="Add a new todo"
//         className="flex-grow px-2 py-1 border rounded border-gray-300"
//       />
//       <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors">Add Todo</button>
//     </form>
//   )
// }

// export default NewTodoForm

// Import statement remains unchanged
import { NewTodos } from "@/utils/actions"

const NewTodoForm = () => {
  return (
    <form action={NewTodos} className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
      <input
        name="content"
        type="text"
        placeholder="Add a new todo"
        className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm