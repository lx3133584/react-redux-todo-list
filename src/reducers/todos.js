import { ADD_TODO, COMPLETE_TODO, addTodo, completeTodo } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO : 
      return [...state, {
        text: action.text,
        completed: false
      }]
    case COMPLETE_TODO :
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        })
        , ...state.slice(action.index + 1)]
    default :
      return state
  }
}
