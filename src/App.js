import { useState, useEffect, useRef } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './stylesheets/app.scss';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [error, setError] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    //local storage
    const saveLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    }

    filterHandler();
    saveLocalTodos();
  }, [todos, status]); 


  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="app">
      <Form 
        inputText={inputText}
        setInputText={setInputText} 
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        inputRef={inputRef}
        error={error}
        setError={setError}
      />

      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
