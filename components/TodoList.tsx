// import Todo from "./Todo"

// const TodoList = ({Todos}) => {
//     return (
//         <div>
//             <h1>Todo List</h1>
//             {Todos.map((todo) => (
//                 <Todo key={todo.id} todo={todo} />
//             ))}
//         </div>
//     );

// }

// export default TodoList;

// TodoList.tsx
import Todo from "./Todo"

const TodoList = ({Todos}) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;