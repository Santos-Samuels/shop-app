import React from 'react';
import RootStack from '@src/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
