// import React, { useState, useEffect, useCallback } from "react";
import React, { useState } from "react";
import { useFonts } from "expo-font";
// import { Provider } from "react-redux";

import RegistrationScreen from "./Screens/RegistrationScreen.js";
import LoginScreen from "./Screens/LoginScreen.js";
// -------------------------------------------------------------------------------------------------------

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
    <>
      {/* <Provider store={store}> */}
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* </Provider> */}
    </>
  )
}
