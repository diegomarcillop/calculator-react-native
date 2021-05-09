import { createActions } from 'redux-actions';

export const { calculator } = createActions({
  CALCULATOR: {
    SET_OPERATION: (operation) => ({operation}),

    SET_STATE: (keyState, newValue) => ({ keyState, newValue })
  }
});