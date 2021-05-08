import { combineReducers } from 'redux';

import themeReducer from '../services/Theme/ThemeReducer';

const RootReducers = () =>
  combineReducers({
    theme: themeReducer,
  });

export default RootReducers;