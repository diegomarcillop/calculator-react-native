import AsyncStorage from '@react-native-community/async-storage';

const key = '@theme';

export const save = async (value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return { status: true };
  } catch (error) {
    return { error: 'Error AccessToken' };
  }
};

export const remove = async () => {
  return await AsyncStorage.removeItem(key);
};

export const get = async () => {
  let info = await AsyncStorage.getItem(key);
  return JSON.parse(info);
};
