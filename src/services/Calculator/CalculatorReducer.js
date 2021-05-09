import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  total: 0,
  operation: "",
  numbers: [],
  operators: [],
};

const CalculatorReducer = handleActions({
  CALCULATOR: {
    SET_OPERATION: (state, action) => ({ ...state,}),

    SET_STATE: (state, { payload: { keyState, newValue } }) => ({ ...state, [keyState]: newValue }),
  }
},
  INITIAL_STATE,
);

export default CalculatorReducer;
