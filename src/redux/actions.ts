import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TodoActionTypes, TOGGLE_TODO } from "./actionTypes";

export function addTodo(title: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: { title },
  };
}

export function toggleTodo(id: number): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
}

export function removeTodo(id: number): TodoActionTypes {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
}

export function changeTodo(text: string, id: number): TodoActionTypes {
  return {
    type: CHANGE_TODO,
    payload: { text, id },
  };
}
