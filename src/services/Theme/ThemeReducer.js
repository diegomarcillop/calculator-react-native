import { handleActions } from 'redux-actions';
import { Appearance } from 'react-native';

const INITIAL_STATE = {
  theme: Appearance.getColorScheme(),
  colors: undefined,
  success: {
    theme: undefined,
  }
};

const ThemeReducer = handleActions({
  THEME: {
    SET_THEME: (state, { payload }) => ({ ...state, theme: payload.theme}),
    GET_THEME: () => ({}),

    SET_STATE: (state, { payload: {keyState, newValue}}) => ({...state, [keyState]: newValue}),
  }
},
  INITIAL_STATE,
);

export default ThemeReducer;
