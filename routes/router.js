import React, { useState, useEffect, useCallback } from "react";
// import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//!  auth
import RegistrationScreen from "../Screens/auth/RegistrationScreen.js";
import LoginScreen from "../Screens/auth/LoginScreen.js";
//!  mainScreen
import PostsScreen from "../Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "../Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "../Screens/mainScreen/ProfileScreen";

//! Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { AntDesign } from '@expo/vector-icons';


// --------------------------------------------------------------------------------------
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();


const headerTitleStyle = {
  fontFamily: "Roboto-Medium",
  fontSize: 17,
  lineHeight: 22,
  textAlign: "center",
  letterSpacing: -0.408,
  color: "#212121",
};


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
            //! ------------- Кнопка: PostsScreen -------------
            <View style={styles.btnPostsScreen}>
              <Image
                // source={require("./assets/icons/posts.png")}
                source={require("../assets/icons/posts.png")}
                // source={image}
                style={{
                  // color: "#FFFFFF",
                  width: 24,
                  height: 24,
                }}
              />
            </View>
            //! ____________ Кнопка: PostsScreen ______________
            //! Icons
            // <MaterialCommunityIcons
            //   name="postage-stamp"
            //   // name="post-outline"
            //   size={size}
            //   color={color} 
            //   />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      {/* //! CreatePostsScreen */}
      <MainTab.Screen
        options={{
          // headerShown: false,
          unmountOnBlur: true,
          headerTitleAlign: "center",
          headerTitleStyle: headerTitleStyle,
          headerTitle: "Создать публикацию",
          tabBarIcon: ({ focused, size, color }) => (
            //! ------------- Кнопка: CreatePostsScreen -------------
            <View style={styles.btnCreatePostsScreen}>
              <Image
                source={require("../assets/icons/create.png")}
                // source={image}
                style={{
                  // color: "#FFFFFF",
                  width: 24,
                  height: 24,
                }}
              />
            </View>
            //! ____________ Кнопка: CreatePostsScreen ______________
            //! Icons
            // <Ionicons
            //   name="add-circle-outline"
            //   size={40}
            //   color={color}
            // />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      {/* //! ProfileScreen */}
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            //! ------------- Кнопка: ProfileScreen -------------
            <View style={styles.btnProfileScreen}>
              <Image
                source={require("../assets/icons/profile.png")}
                // source={image}
                style={{
                  // color: "#FFFFFF",
                  width: 24,
                  height: 24,
                }}
              />
            </View>
            //! ____________ Кнопка: ProfileScreen ______________
            //! Icons
            // <Octicons
            //   name="person"
            //   size={size}
            //   color={color}
            // />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

//! JS-объект со стилями
const styles = StyleSheet.create({
  //! Кнопка: PostsScreen
  btnPostsScreen: {
    // marginRight: -185,
    marginRight: -39
  },
  //! Кнопка: CreatePostsScreen
  btnCreatePostsScreen: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
  //! Кнопка: ProfileScreen
  btnProfileScreen: {
    // marginRight: -185,
    marginLeft: -39
  }
});
