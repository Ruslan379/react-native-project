// import React, { useState, useEffect, useCallback } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../routes/router";
import { authStateChangeUser } from "../redux/auth/authOperations.js";


// //! ---- Логика входа в "auth" или в "mainScreen" c Firebase ----
// // import db from "./firebase/config"; //todo --> устарело!!!
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import app from "../firebase/config.js";

// const auth = getAuth(app);
// //! ____ Логика входа в "auth" или в "mainScreen" c Firebase ____


//----------------------------------------------------------------------
export const Main = () => {

  // //! ---- Логика входа в "auth" или в "mainScreen" c Firebase ----
  // const [user, setUser] = useState(null);
  // // db.auth().onAuthStateChanged((user) => setUser(user)); //todo --> устарело!!!
  // onAuthStateChanged(auth, (user) => setUser(user));
  // console.log("App==>user:", user); //!
  // //! ____ Логика входа в "auth" или в "mainScreen" c Firebase ____

  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  //! Логика входа в "auth" или в "mainScreen" 
  // const routing = useRoute(false); //? auth
  // const routing = useRoute(true); //* mainScreen

  // //! ---- Логика входа в "auth" или в "mainScreen" c Firebase ----
  // const routing = useRoute(user);

  //! ____ Логика входа в "auth" или в "mainScreen" c stateChange ____
  const routing = useRoute(stateChange);


  return <NavigationContainer>{routing}</NavigationContainer>;
};
