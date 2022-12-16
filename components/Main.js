import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { UseRoute } from "../routes/router.js";
import { authStateChangeUser } from "../redux/auth/authOperations.js";


//----------------------------------------------------------------------
export const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = UseRoute(stateChange);
  // const routing = UseRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
