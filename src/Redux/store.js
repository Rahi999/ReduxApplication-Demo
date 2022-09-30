import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer
});

const logger1 = (store) => (next) => (action) => {
  //console.log("inside logger1");
  return next(action);
};
const logger2 = (store) => (next) => (action) => {
  //console.log("inside logger2");
  return next(action);
};
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(logger1, logger2)
);

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
