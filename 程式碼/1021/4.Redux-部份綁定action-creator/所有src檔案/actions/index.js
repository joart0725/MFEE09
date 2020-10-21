import { ADD_VALUE, MINUS_VALUE } from './actionTypes'

// action creator 動作建立器

export const addValue = (value) => {
  return { type: ADD_VALUE, value }
}

export const minusValue = (value) => {
  return { type: MINUS_VALUE, value }
}

// todos
// export const addTodo = (value) => {
//   return { type: ADD_TODO, value }
// }

// export const deleteTodo = (value) => {
//   return { type: MINUS_TODO, value }
// }
