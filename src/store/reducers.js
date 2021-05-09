import { combineReducers } from 'redux';

import themeReducer from '../services/Theme/ThemeReducer';
import calculatorReducer from '../services/Calculator/CalculatorReducer';

const RootReducers = () =>
  combineReducers({
    theme: themeReducer,
    calculator: calculatorReducer,
  });

export default RootReducers;