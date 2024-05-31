// Home component in page.tsx
import NewTodoForm from "@/components/NewTodoForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Todo App!</h1>
      <p className="text-xl text-gray-600 mb-8">Start adding your tasks today.</p>
      <NewTodoForm />
     </div>
  )
}