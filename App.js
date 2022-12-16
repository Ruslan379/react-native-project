// import React, { useState, useEffect, useCallback } from "react";
import { Provider, useSelector } from "react-redux";
import { useFonts } from "expo-font";

import { store } from "./redux/store";
import { Main } from "./components/Main.js";


// --------------------------------------------------------------------------------------
export default function App() {
  //! Загрузка шрифтов_NEW
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  console.log("App ==>", Platform.OS); //!

  //! Проверка наличия шрифтов
  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}


