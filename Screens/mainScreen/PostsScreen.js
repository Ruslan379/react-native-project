import React from "react";
// import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

//!  nestedScreens
import Home from "../nestedScreens/Home.js";
import CommentsScreen from "../nestedScreens/CommentsScreen.js";
import MapScreen from "../nestedScreens/MapScreen.js";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <>
      {/* //! ------------- Кнопка: Log-out ------------- */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnLogOut}
        // onPress={keboardHideAndSubmit}
        onPress={() => {
          console.log("Log-out");
          // keboardHideAndSubmit()
          // navigation.navigate("Posts")
        }}

      >
        <Image
          source={require("../../assets/icons/log-out.png")}
          // source={image}
          style={{
            // backgroundColor: "#000000",
            // color: "#ffffff",
            width: 24,
            height: 24,
            // paddingLeft: 100,
            // alignItems: "center",
            // width: windowWidth,
            // height: windowHeight,
            // position: 'absolute',
            // right: 0,
            // top: 0,
            // left: 0
          }}
        />
      </TouchableOpacity>
      {/* //! ____________ Кнопка Log-out ______________ */}

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

//! JS-объект со стилями
const styles = StyleSheet.create({
  //! Кнопка Log-out
  btnLogOut: {
    marginTop: 54,
    marginRight: 16,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "#FFFFFF",
  },
});

export default PostsScreen;



