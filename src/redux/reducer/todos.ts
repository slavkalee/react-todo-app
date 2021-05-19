import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_TODO,
} from '../actionTypes';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

const initialData = [
  { id: 1, title: 'Angular JS', completed: false },
  { id: 2, title: 'React JS', completed: false },
  { id: 3, title: 'Vue JS', completed: true },
];

export default function todos(state: ITodo[] = initialData, action: any) {
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
