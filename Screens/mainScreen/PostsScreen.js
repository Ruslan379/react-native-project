import React from "react";
// import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  Text,
  View,
  Image //? 2.14
} from 'react-native';

//!  nestedScreens
import Home from "../nestedScreens/Home.js";
import CommentsScreen from "../nestedScreens/CommentsScreen.js";
import MapScreen from "../nestedScreens/MapScreen.js";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <>
      <Image
        source={require("../../assets/icons/log-out.png")}
        // source={image}
        style={{
          // backgroundColor: "#000000",
          color: "#ffffff",
          width: 24,
          height: 24,
          // width: windowWidth,
          // height: windowHeight,
          // position: 'absolute',
          // right: 0,
          // top: 0,
          // left: 0
        }}
      />
      <NestedScreen.Navigator>
        <NestedScreen.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="Home"
          component={Home}
        />
        <NestedScreen.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="CommentsScreen"
          component={CommentsScreen}
        />
        <NestedScreen.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="MapScreen"
          component={MapScreen}
        />
      </NestedScreen.Navigator>
    </>
  );
};

export default PostsScreen;



