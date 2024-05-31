import NewTodoForm from "@/components/NewTodoForm"

const Dashboardlayout = ({ children }: { children: any }) => {
  return (
    <div>
      <h1>From layout of dashboard</h1>
      <div>
      <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Dashboardlayout
