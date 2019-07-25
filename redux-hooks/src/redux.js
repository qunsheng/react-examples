import { createStore } from "redux";
import uuid from "uuid/v4";

//
// initiial state, needed to create store
//
const initialState = {
  todos: [
    {
      id: uuid(),
      name: "Read a bit",
      complete: true
    },
    {
      id: uuid(),
      name: "Do laundry",
      complete: false
    }
  ]
};

//
// Reducer, needed for create store
// returns the next state tree, given the current state tree and an action to handle
//
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

//
// createStore(reducer, [preloadedState], [enhancer])
//
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//
// Actions, fuctions return action object
//
export const addTodoAction = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const toggleTodoComplete = todoId => ({
  type: "TOGGLE_TODO",
  payload: todoId
});

export const deleteTodoAction = todoId => ({
  type: "DELETE_TODO",
  payload: todoId
});
