import { ADD_TODO, TOGGLE_TODO } from '../action/actionVariables'

const initialState = {
  todos: [
    { id: 1, text: 'Learn React', completed: true},
    { id: 2, 
      text: 'Learn Redux', 
      completed: false, 
      color: 'purple'},
    { id: 3, 
      text: 'Build something', 
      completed: true, 
      color: 'blue'},
  ],
  filters: {
    status: 'Active', 
    colors: ['red', 'blue']
  }
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return {
      ...state,
      todos: [ ...state.todos, action.payload ]
    }
    case TOGGLE_TODO: return {
      ...state,
      todos: state.todos.map(todo => {
        if(todo.id !== action.id) return todo
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    default:
      return state
  }
}

export default todoReducer;
