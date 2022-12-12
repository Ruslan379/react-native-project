// import React, { useState, useEffect, useCallback } from "react";
import React, { useState } from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


//!  auth
import RegistrationScreen from "./Screens/auth/RegistrationScreen.js";
import LoginScreen from "./Screens/auth/LoginScreen.js";
//!  mainScreen
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreateScreen from "./Screens/mainScreen/CreateScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";


// --------------------------------------------------------------------------------------
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

//! Логика отрисовки страниц auth или mainScreen
const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="Create" component={CreateScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default function App() {
  //! Загрузка шрифтов_NEW
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  console.log("App ==>", Platform.OS); //!

  //! Логика отрисовки страниц auth или mainScreen 
  const routing = useRoute({}); //! mainScreen
  // const routing = useRoute(null); //! auth

  //! Проверка наличия шрифтов
  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };

  return <NavigationContainer>{routing}</NavigationContainer>;
}



  // return (

  //   <NavigationContainer>

  //     <AuthStack.Navigator>
  //       //! RegistrationScreen
  //       <AuthStack.Screen
  //         options={{
  //           headerShown: false,
  //         }}
  //         name="Register"
  //         component={RegistrationScreen}
  //       />
  //       //! LoginScreen
  //       <AuthStack.Screen options={{
  //         headerShown: false,
  //       }}
  //         name="Login"
  //         component={LoginScreen}
  //       />
  //     </AuthStack.Navigator>


  //     <MainTab.Navigator>
  //       <MainTab.Screen name="Posts" component={PostsScreen} />
  //       <MainTab.Screen name="Create" component={CreateScreen} />
  //       <MainTab.Screen name="Profile" component={ProfileScreen} />
  //     </MainTab.Navigator>

  //   </NavigationContainer>
  // )





// auth

// <AuthStack.Navigator>
// <AuthStack.Screen
//   options={{
//     headerShown: false,
//   }}
//   name="Login"
//   component={LoginScreen}
// />
// <AuthStack.Screen
//   options={{
//     headerShown: false,
//   }}
//   name="Register"
//   component={RegisterScreen}
// />
// </AuthStack.Navigator>



