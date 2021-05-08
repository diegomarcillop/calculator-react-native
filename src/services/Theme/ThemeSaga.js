import { Appearance } from 'react-native';
import { all, put, takeLatest } from 'redux-saga/effects';

import * as themeStorage from '../../@common/storage/theme';
import { theme } from './ThemeActions';

function* getTheme() {
  let themeDefault = yield themeStorage.get();

  if (themeDefault) 
    yield put(theme.setState('theme', themeDefault));
}

function* setTheme({payload}) {
  let themeValue = payload.theme;
  yield themeStorage.save(themeValue); 
}


function* actionWatcher() {
  yield takeLatest(theme.getTheme, getTheme); 
  yield takeLatest(theme.setTheme, setTheme); 
}

export default function* ThemeSaga() {
  yield all([actionWatcher()]);
}
