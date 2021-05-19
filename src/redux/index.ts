import todos from './reducer/todos';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  todos,
});

