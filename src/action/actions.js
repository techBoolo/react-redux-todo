import { 
  ADD_TODO,
  TOGGLE_TODO
} from './actionVariables';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload 
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
