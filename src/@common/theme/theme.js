import { colorsLight, colorsDark } from './colors';
export { fonts } from './fonts';
import store from '../../store/store';

export const colors = colorsDark;

export const getColors = (value) => {
  return (value || store.getState().theme.theme) === 'dark' ? colorsDark : colorsLight;
};