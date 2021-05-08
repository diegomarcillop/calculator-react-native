import { createActions } from 'redux-actions';

export const { theme } = createActions({
  THEME: {
    GET_THEME: () => ({}),
    SET_THEME: (theme) => ({ theme }),

    SET_STATE: (keyState, newValue) => ({keyState, newValue})
  }
})