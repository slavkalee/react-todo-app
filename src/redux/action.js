import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionType";

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: { title },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
}

export function changeTodo(text, id) {
  return {
    type: CHANGE_TODO,
    payload: { text, id },
  };
}
