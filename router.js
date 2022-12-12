// import React, { useState, useEffect, useCallback } from "react";
import React from "react";

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
export const useRoute = (isAuth) => {
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
      {/* //! PostsScreen */}
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
      />
      {/* //! CreateScreen */}
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
      />
      {/* //! ProfileScreen */}
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

