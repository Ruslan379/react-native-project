import React from "react";
// import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//!  nestedScreens
import Home from "../nestedScreens/Home.js";
import CommentsScreen from "../nestedScreens/CommentsScreen.js";
import MapScreen from "../nestedScreens/MapScreen.js";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
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
  );
};

export default PostsScreen;



