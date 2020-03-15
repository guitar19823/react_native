import {
  SET_USER_NAME,
  SET_USER_PASSWORD,
  USER_LOGIN,
  USER_LOGOUT
} from "../types";


const initialState = {
  isLogin: false,
  name: '',
  password: ''
};

const handlers = {
  [SET_USER_NAME]: (state, { payload }) => ({
    ...state,
    name: payload
  }),
  [SET_USER_PASSWORD]: (state, { payload }) => ({
    ...state,
    password: payload
  }),
  [USER_LOGIN]: state => ({
    ...state,
    isLogin: true
  }),
  [USER_LOGOUT]: state => ({
    ...state,
    isLogin: false,
    name: '',
    password: ''
  }),
  DEFAULT: state => state
};

export const userReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};