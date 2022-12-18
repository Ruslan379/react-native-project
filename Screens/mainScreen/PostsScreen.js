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

//!  Выход из регистрации --> SignOut (Кнопка: Log-out)
import { authSignOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

//! icons
import { Feather } from "@expo/vector-icons";

//------------------------------------------------------------------------------
const NestedScreen = createStackNavigator();

const headerTitleStyle = {
  fontFamily: "Roboto-Medium",
  fontSize: 17,
  lineHeight: 22,

  textAlign: "center",
  letterSpacing: -0.408,

  color: "#212121",
};

const PostsScreen = ({ navigation }) => {
  //!  Выход из регистрации --> SignOut (Кнопка: Log-out)
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };


  return (
    <>
      {/* //! ------------- Кнопка: Log-out ------------- */}
      {/* <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnLogOut}
        // onPress={keboardHideAndSubmit}
        onPress={() => {
          console.log("PostsScreen-->Log Out");
          signOut(); //!  Выход из регистрации
          // keboardHideAndSubmit()
          // navigation.navigate("CommentsScreen")
          // navigation.navigate('Home', { screen: "MapScreen" })
          // navigation.navigate('useRoute', { screen: "Register" })
        }}
      >
        <Image
          source={require("../../assets/icons/log-out.png")}
          // source={image}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity> */}
      {/* //! ____________ Кнопка Log-out ______________ */}

      <NestedScreen.Navigator>
        <NestedScreen.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="Home"
          component={Home}
          options={{
            headerRightContainerStyle: { paddingRight: 16 },
            headerTitleAlign: "center",
            headerTitleStyle: headerTitleStyle,
            headerTitle: "Публикации",
            //! ------------- Кнопка: Log-out ------------- 
            headerRight: () => (
              <Feather
                onPress={signOut}
                name="log-out"
                size={24}
                color="#BDBDBD"
              />
            ),
            //! ____________ Кнопка Log-out ______________
          }}
        />
        <NestedScreen.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: headerTitleStyle,
            headerTitle: "Комментарии",
          }}
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



