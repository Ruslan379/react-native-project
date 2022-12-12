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

//! Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { AntDesign } from '@expo/vector-icons';


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
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      {/* //! PostsScreen */}
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              // name="postage-stamp"
              name="post-outline"
              size={size}
              color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      {/* //! CreateScreen */}
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      {/* //! ProfileScreen */}
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

