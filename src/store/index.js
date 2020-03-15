import { createStore, combineReducers } from 'redux';
import { elementReducer } from './reducers/element';
import { userReducer } from './reducers/user';

const rootReducer = combineReducers({
  list: elementReducer,
  user: userReducer
});

export default createStore(rootReducer);