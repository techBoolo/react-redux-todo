import { addTodo } from '../action/actions';
import { useDispatch } from 'react-redux';

const NewTodo = () => {
  
  const dispatch = useDispatch();

  const generateId = () => {
    return Math.floor(Math.random() * 10000) + 1;
  }

  const addNewTodo = (ev) => {
    ev.preventDefault();
    const todoText = ev.target.todo.value;
    ev.target.todo.value = '';
    const newTodo = {
      text: todoText,
      id: generateId()
    }
    dispatch(addTodo(newTodo));
  }

  return (
    <form onSubmit={addNewTodo}>  
      <input name='todo' />
      <button type='submit'>Add</button>
    </form>
  )
}

export default NewTodo;
