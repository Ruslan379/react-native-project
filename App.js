// import React, { useState, useEffect, useCallback } from "react";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions, //? 2.14
} from 'react-native';


//! Для загрузки шрифтов_OLD
// import * as Font from 'expo-font';
// // import { AppLoading } from 'expo'; //! уже устарело и так не работает!!!
// import AppLoading from 'expo-app-loading';

//! Для загрузки шрифтов_NEW
// // import { useCallback } from 'react';
import { useFonts } from "expo-font";
// import * as SplashScreen from 'expo-splash-screen';
// SplashScreen.preventAutoHideAsync();


// -------------------------------------------------------------------------------------------------------
const initialState = {
  loginName: "",
  email: "",
  password: ""
}

//! Загрузка шрифтов_OLD
// const loadApplication = async () => {
//   await Font.loadAsync({
//     "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   })
// };

// SplashScreen.preventAutoHideAsync(); //! Загрузка шрифтов_NEW
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default function App() {
  //! Загрузка шрифтов_NEW
  const [fontsLoaded] = useFonts({
    // "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  console.log(Platform.OS); //!
  //! useState
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  // const [isReady, setIsReady] = useState(false); //! Загрузка шрифтов_OLD
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const keboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const keboardHideAndSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state:", state); //!
    setState(initialState);
  }

  //! Проверка наличия шрифтов_OLD
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // };
  //! Проверка наличия шрифтов_NEW
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // console.log("fontsLoaded:", fontsLoaded); //!
  if (!fontsLoaded) {
    return null;
  };


  return (
    <TouchableWithoutFeedback onPress={keboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          // source={require("./assets/images/stars-on-night.jpg")}
          source={require("./assets/images/Photo_BG.png")}
        >
          <KeyboardAvoidingView
          //! не корректно работает на Android
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* //! ------------------ Белый контейнер---------------------- */}
            <View
              style={{
                ...styles.whiteContainer,
                marginBottom: isShowKeyboard ? -150 : 0,
              }}
            >
              {/* //! ------------- контейнер: photoFrame ------------ */}
              <View style={styles.photoFrame}></View>
              {/* //! _____________ контейнер: photoFrame _____________ */}


              {/* //! ---------------- контейнер: form ---------------- */}
              <View style={styles.form}>

                {/* //! ------------- текст: Регистрация ------------ */}
                <Text style={styles.headerTitle}>Регистрация</Text>
                {/* //! ______________ текст: Регистрация _____________ */}

                {/* //! ------------- Input: Логин ------------ */}
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                />
                {/* //! ______________ Input: Логин ______________ */}

                {/* <View style={{ marginTop: 20 }}> */}
                {/* <Text style={styles.inputTitle}>Password</Text> */}
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isFocusedLogin ? "#ffffff" : "#f6f6f6",
                    color: isFocusedLogin ? "#212121" : "#BDBDBD",
                    borderColor: isFocusedLogin ? "#ff6c00" : "#e8e8e8",
                    marginTop: 32,
                    marginBottom: 16,
                  }}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                />
                {/* </View> */}

                {/* <Button
                // onPress={onPressLearnMore}
                // title="SIGN IN"/
              // color="#841584"
              // accessibilityLabel="Learn more about this purple button"
              /> */}

                {/* //! Кнопка "SIGN IN" */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keboardHideAndSubmit}
                >
                  <Text style={styles.btnTitle}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
              {/* //! ________________ контейнер: form ________________ */}
            </View>
            {/* //! __________________ Белый контейнер __________________ */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback >
  );
}

//! JS-объект со стилями
const styles = StyleSheet.create({
  //! Основной контейнер
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  //! ImageBackground
  image: {
    flex: 1,
    resizeMode: "cover",
    // alignItems: 'center', //? 2.14
    // justifyContent: "center",
    justifyContent: "flex-end",
  },
  //! Белый контейнер
  whiteContainer: {
    backgroundColor: "#ffffff",
    height: 550,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    marginBottom: 0,
  },
  //! photoFrame
  photoFrame: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    marginTop: -60,
    borderRadius: 16,
  },
  //! Контейнер: form
  form: {
    alignItems: 'center',
    // marginHorizontal: 50, //? 2.14
    // marginBottom: 100,
  },
  //! текст: Регистрация
  headerTitle: {
    color: "#000000",
    fontSize: 30,
    marginTop: 32,
    fontFamily: "Roboto-Medium",
  },
  //! Input: Логин
  input: {
    marginHorizontal: 16,
    paddingLeft: 16,
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    placeholderTextColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
  },
  inputTitle: {
    color: "#000000",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "DMMono-Regular"
    // fontFamily: "Roboto-Bold"
  },
  btn: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 40,
    marginHorizontal: 20,
    color: "#f0f8ff",
    alignItems: 'center',
    justifyContent: 'center',

    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#ffb6c1",
      },
      android: {
        backgroundColor: "#ffb6c1",
        borderColor: "transparent",
      },
      default: {
        // other platforms, web for example
        backgroundColor: "#4169e1"
      }
    })

    // backgroundColor: Platform.OS === "ios" ? "transparent" : "#4169e1",
    // borderColor: Platform.OS === "ios" ? "#ffb6c1" : "transparent",
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
    fontSize: 18,
    fontFamily: "DMMono-Regular"
  },
});
