import { LOAD_ELEMENTS } from "../types";

const initialState = {
  allElements: []
};

const handlers = {
  [LOAD_ELEMENTS]: (state, { payload }) => ({
    ...state,
    allElements: payload
  }),
  DEFAULT: state => state
};

export const elementReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};