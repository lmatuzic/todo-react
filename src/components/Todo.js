import { FaCheck, FaTrash, FaUndo } from 'react-icons/fa';

const Todo = ({ todoId, todoStatus, todos, setTodos, content }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((element) => (
      element.id !== todoId  
    )))
  }

  const finishTodoHandler = () => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  return (
    <div className="todo">
      <div className={`todo__item--${todoStatus ? 'completed' : ''}`}>{content}</div>

      <div className="cta">
        <button className={`${todoStatus ? 'todo--undo' : 'todo--check'}`} onClick={finishTodoHandler}>{todoStatus ? <FaUndo /> : <FaCheck />}</button>
        <button className="todo--empty" onClick={deleteTodoHandler}><FaTrash /></button>
      </div>
    </div>
  )
}

export default Todo
