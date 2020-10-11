import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import todos from "./reducer/todos";
import { combineReducers } from "redux";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const rootReducer = combineReducers({
  todos,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage()

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
