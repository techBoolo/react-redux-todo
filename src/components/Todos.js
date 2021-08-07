import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../action/actions';


const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return <li>
      <input type='checkbox' 
          defaultChecked={todo.completed} 
          onClick={() => dispatch(toggleTodo(todo.id))} />
      {todo.text}
  </li>
}

const Todos = () => {
  const todos = useSelector(state => state.todos);  

  console.log(todos);
  return (
    <ul>
      { todos.map(todo => 
        <Todo key={todo.id} todo={todo} />
        )}

    </ul>
    ) 
}

export default Todos;
