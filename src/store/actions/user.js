import {
  SET_USER_NAME,
  SET_USER_PASSWORD,
  USER_LOGIN,
  USER_LOGOUT
} from "../types";

export const setUserName = name => ({
  type: SET_USER_NAME,
  payload: name
});

export const setUserPassword = password => ({
  type: SET_USER_PASSWORD,
  payload: password
});

export const userLogin = () => ({
  type: USER_LOGIN
});

export const userLogout = () => ({
  type: USER_LOGOUT
});