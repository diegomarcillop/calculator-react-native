import { fork, all } from 'redux-saga/effects';

import themeSaga from '../services/Theme/ThemeSaga';
import calculatorSaga from '../services/Calculator/CalculatorSaga';

export function* rootSaga() {
  yield all([
    fork(themeSaga),
    fork(calculatorSaga),
  ]);
};
