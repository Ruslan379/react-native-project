// import React, { useState, useEffect, useCallback } from "react";
import React, { useState } from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from "./router";


// --------------------------------------------------------------------------------------


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
  // const routing = useRoute(true); //! mainScreen
  const routing = useRoute(false); //! auth

  //! Проверка наличия шрифтов
  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };

  return <NavigationContainer>{routing}</NavigationContainer>;
}


