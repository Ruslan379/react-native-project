import React, { useState, useEffect, useCallback } from "react";
import { Provider, useSelector } from "react-redux";
import { useFonts } from "expo-font";
// import { NavigationContainer } from '@react-navigation/native'; //?

import { store } from "./redux/store";
// import { useRoute } from "./routes/router"; //?

// //? ---- Логика входа в "auth" или в "mainScreen" c Firebase ----
// // import db from "./firebase/config"; //todo --> устарело!!!
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import app from "./firebase/config.js";

// const auth = getAuth(app);
// //? ____ Логика входа в "auth" или в "mainScreen" c Firebase ____

import { Main } from "./components/Main.js";

// --------------------------------------------------------------------------------------


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default function App() {

  // //? ---- Логика входа в "auth" или в "mainScreen" c Firebase ----
  // const [user, setUser] = useState(null);

  // // db.auth().onAuthStateChanged((user) => setUser(user)); //todo --> устарело!!!
  // onAuthStateChanged(auth, (user) => setUser(user));
  // console.log("App==>user:", user); //!
  // //? ____ Логика входа в "auth" или в "mainScreen" c Firebase ____


  //! Загрузка шрифтов_NEW
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });


  console.log("App ==>", Platform.OS); //!


  //? Логика входа в "auth" или в "mainScreen" 
  // const routing = useRoute(false); //? auth
  // const routing = useRoute(true); //* mainScreen
  //! ---- Логика входа в "auth" или в "mainScreen" c Firebase ----
  // const routing = useRoute(user);
  //? ____ Логика входа в "auth" или в "mainScreen" c Firebase ____


  //! Проверка наличия шрифтов
  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };

  return (
    <Provider store={store}>
      <Main />
      {/* //? <NavigationContainer>{routing}</NavigationContainer> */}
    </Provider>
  );
}


