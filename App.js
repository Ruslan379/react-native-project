// import React, { useState, useEffect, useCallback } from "react";
import React, { useState } from "react";
import { useFonts } from "expo-font";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




import RegistrationScreen from "./Screens/auth/RegistrationScreen.js";
import LoginScreen from "./Screens/auth/LoginScreen.js";
// -------------------------------------------------------------------------------------------------------

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const Stack = createStackNavigator();

export default function App() {
  //! Загрузка шрифтов_NEW
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  console.log(Platform.OS); //!

  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };


  return (
    <NavigationContainer>

      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </NavigationContainer>
  )
}
