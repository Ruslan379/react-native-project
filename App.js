// import React, { useState, useEffect, useCallback } from "react";
import React, { useState } from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";




import RegistrationScreen from "./Screens/auth/RegistrationScreen.js";
import LoginScreen from "./Screens/auth/LoginScreen.js";
// -------------------------------------------------------------------------------------------------------

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  //! Загрузка шрифтов_NEW
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  console.log("App ==>", Platform.OS); //!

  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };


  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {/* //! RegistrationScreen */}
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
        {/* //! LoginScreen */}
        <AuthStack.Screen options={{
          headerShown: false,
        }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>

    </NavigationContainer>
  )
}
