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
        name="Home"
        component={Home}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;



