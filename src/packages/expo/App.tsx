import { useStore } from '@tripstagger/app/state';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { enableFreeze, enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

enableScreens(true);
enableFreeze(true);

export default function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <View>
        <Text>Open2 up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}
