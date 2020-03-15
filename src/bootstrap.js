import * as Font from 'expo-font';

export async function bootsrtrap() {
  await Font.loadAsync({
    'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
  });
}