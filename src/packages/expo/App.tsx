import React from 'react'
import { enableScreens, enableFreeze } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

enableScreens(true)
enableFreeze(true)

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
