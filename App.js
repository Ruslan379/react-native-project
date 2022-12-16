// import React, { useState, useEffect, useCallback } from "react";
import React, { useState } from "react";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";

import { NavigationContainer } from '@react-navigation/native';

import { store } from "./redux/store";
import { useRoute } from "./router";

//! ---- Логика отрисовки страниц auth или mainScreen c Firebase ----
// import db from "./firebase/config"; //todo --> устарело!!!
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/config.js";

const auth = getAuth(app);
//! ____ Логика отрисовки страниц auth или mainScreen c Firebase ____

// --------------------------------------------------------------------------------------


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default function App() {
  //! ---- Логика отрисовки страниц auth или mainScreen c Firebase ----
  const [user, setUser] = useState(null);

  // db.auth().onAuthStateChanged((user) => setUser(user)); //todo --> устарело!!!
  onAuthStateChanged(auth, (user) => setUser(user));
  console.log("App==>user:", user); //!
  //! ____ Логика отрисовки страниц auth или mainScreen c Firebase ____


  //! Загрузка шрифтов_NEW
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });


  console.log("App ==>", Platform.OS); //!


  //! Логика отрисовки страниц auth или mainScreen 
  // const routing = useRoute(false); //! auth
  // const routing = useRoute(true); //! mainScreen
  //! ---- Логика отрисовки страниц auth или mainScreen c Firebase ----
  const routing = useRoute(user); //! mainScreen
  //! ____ Логика отрисовки страниц auth или mainScreen c Firebase ____


  //! Проверка наличия шрифтов
  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}


