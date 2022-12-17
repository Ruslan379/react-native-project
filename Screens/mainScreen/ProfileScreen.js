import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

//!  Выход из регистрации --> SignOut (Кнопка: Log-out)
import { authSignOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";


//------------------------------------------------------------------------------
const ProfileScreen = () => {
  //!  Выход из регистрации --> SignOut (Кнопка: Log-out)
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };


  return (
    <>
      {/* //! ------------- Кнопка: Log-out ------------- */}
      <TouchableOpacity
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
      </TouchableOpacity>
      {/* //! ____________ Кнопка Log-out ______________ */}



      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    </>
  );
};

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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
