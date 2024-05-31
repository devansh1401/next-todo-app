// 'use client'
// import { completeTodo } from '@/utils/actions'
// import { useTransition } from 'react'

// const Todo = ({ todo }) => {
//   const [isPending, startTransition] = useTransition()
//   return (
//     <div
//       className={`px-4 py-2 border border-gray-200 rounded-lg cursor-pointer ${todo.completed? 'line-through text-gray-400' : ''}`}
//       onClick={() => startTransition(() => completeTodo(todo.id))}
//     >
//       {todo.content}
//     </div>
//   )
// }

// export default Todo

// Todo.tsx
'use client'
import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={`px-4 py-2 border border-gray-200 rounded-lg cursor-pointer ${todo.completed? 'line-through text-gray-400' : ''}`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  )
}

export default Todo