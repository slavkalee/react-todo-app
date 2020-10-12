import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_TODO,
} from "../actionTypes";

const initialData = [];

export default function todos(state = initialData, action) {
  switch (action.type) {
    case ADD_TODO:
      const { title } = action.payload;
      return [
        ...state,
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ];
    case CHANGE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.text;
        }
        return todo;
      });
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
