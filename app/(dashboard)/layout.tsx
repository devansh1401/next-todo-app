import NewTodoForm from "@/components/NewTodoForm"

const Dashboardlayout = ({ children }: { children: any }) => {
  return (
    <div>
      <div>
      <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Dashboardlayout
