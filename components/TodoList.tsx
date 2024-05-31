import Todo from "./Todo"

const TodoList = ({Todos}) => {
    return (
        <div>
            <h1>Todo List</h1>
            {Todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );

}

export default TodoList;