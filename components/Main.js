// import React, { useState, useEffect, useCallback } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../routes/router";
import { authStateChangeUser } from "../redux/auth/authOperations.js";


//----------------------------------------------------------------------
export const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  //! Логика входа в "auth" или в "mainScreen" 
  // const routing = useRoute(false); //? auth
  // const routing = useRoute(true); //* mainScreen

  //! ____ Логика входа в "auth" или в "mainScreen" c stateChange ____
  const routing = useRoute(stateChange);


  return <NavigationContainer>{routing}</NavigationContainer>;
};
