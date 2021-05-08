import { StyleSheet } from 'react-native';
import { colors } from '../../../@common/theme/theme';

export const style = StyleSheet.create({
  buttonToogle: {
    width: '35%', 
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    elevation: 6,
    padding: 4,
  }, 
  buttonToogle__item: { 
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '35%',
    height: '100%',
  },
  buttonToogle__item__divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '35%',
    height: '100%',
  },
  buttonToogle__line: {
    width: 2,
    height: '100%',
  }
});