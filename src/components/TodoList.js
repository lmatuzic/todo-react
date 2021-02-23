import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <ul className="todo__list">
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <Todo 
            todoId={todo.id}
            content={todo.text} 
            todoStatus={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
