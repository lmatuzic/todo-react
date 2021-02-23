import Select from 'react-select'
import { FaPlus } from 'react-icons/fa';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, inputRef, error, setError }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value.length > 0) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 101),
          text: inputText,
          completed: false
        }
      ]);
      setInputText('');
      setError(null);
    } else if (inputRef.current.value.length === 0) {
      setError('Input must not be empty!')
    }
  } 

  const statusHandler = (e) => {
    setStatus(e.value);
  }

  const options = [
    { value: 'all', label: 'all' },
    { value: 'completed', label: 'completed' },
    { value: 'uncompleted', label: 'uncompleted' }
  ]

  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none"
    })
}

  return (
    <div className="form__wrapper">
      <form className="todos__form">
        <div className="input__wrapper">
          <input ref={inputRef} value={inputText} onChange={inputTextHandler} type="text" className="text__input" />
          <button type="submit" onClick={submitTodoHandler}><FaPlus /></button>
        </div>

        <div className="error">{error}</div>

        <Select 
          options={options} 
          defaultValue={options[0]}
          onChange={statusHandler}
          isSearchable={false}
          styles={style}
        />
      </form>
    </div>
  )
}

export default Form
