export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    title: string;
  };
}
export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: number;
  };
}
export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: {
    id: number;
  };
}
export interface ChangeTodoAction {
  type: typeof CHANGE_TODO;
  payload: {
    id: number;
    text: string;
  };
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | RemoveTodoAction
  | ChangeTodoAction;
