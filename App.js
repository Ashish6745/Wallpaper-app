import React from 'react'
import {Text, View,StyleSheet, ImageBackground, ScrollView, Image, StatusBar } from 'react-native'
import Carsel from './component/Carsel';
function App() {
  return (
  <View>
  <StatusBar backgroundColor='midnightblue' />
   <Carsel />
  </View>
  )
}

export default App;
