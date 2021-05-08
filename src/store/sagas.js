import { fork, all } from 'redux-saga/effects';

import themeSaga from '../services/Theme/ThemeSaga';

export function* rootSaga() {
  yield all([
    fork(themeSaga),
  ]);
};
