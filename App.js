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
    setIsFocusedLogin(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    Keyboard.dismiss();
  };

  const keboardHideAndSubmit = () => {
    setIsShowKeyboard(false);
    setIsFocusedLogin(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    Keyboard.dismiss();
    console.log("state:", state); //!
    setState(initialState);
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


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
        {/* //! ------------------ Фоновый image --------------------- */}

        <Image source={require("./assets/images/Photo_BG.png")} style={{ width: windowWidth, height: windowHeight, position: 'absolute', top: 0, left: 0 }} />


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
                  style={{
                    ...styles.input,
                    backgroundColor: isFocusedLogin ? "#FFFFFF" : "#F6F6F6",
                    color: isFocusedLogin ? "#212121" : "#BDBDBD",
                    borderColor: isFocusedLogin ? "#FF6C00" : "#E8E8E8",
                    marginTop: 32,
                    marginBottom: 16,
                  }}
                  // textAlign={"center"}
                  placeholder="Логин"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsFocusedLogin(true);
                  }}
                  onBlur={() => setIsFocusedLogin(false)}
                  value={state.loginName}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, loginName: value }))}
                />
                {/* //! ______________ Input: Логин ______________ */}


                {/* //! ------ Input: Адрес электронной почты ----- */}
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isFocusedMail ? "#FFFFFF" : "#F6F6F6",
                    color: isFocusedMail ? "#212121" : "#BDBDBD",
                    borderColor: isFocusedMail ? "#FF6C00" : "#E8E8E8",
                    marginBottom: 16,
                  }}
                  // textAlign={"center"}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShowKeyboard(true)
                    setIsFocusedMail(true);
                  }}
                  onBlur={() => setIsFocusedMail(false)}
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                />
                {/* //! _____ Input: Адрес электронной почты _____ */}


                {/* //! ------------- Input: Пароль ------------ */}
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isFocusedPassword ? "#FFFFFF" : "#F6F6F6",
                    color: isFocusedPassword ? "#212121" : "#BDBDBD",
                    borderColor: isFocusedPassword ? "#FF6C00" : "#E8E8E8",
                  }}
                  // textAlign={"center"}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShowKeyboard(true)
                    setIsFocusedPassword(true);
                  }}
                  onBlur={() => setIsFocusedPassword(false)}
                  value={state.password}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                />
                {/* //! ______________ Input: Пароль ______________ */}




                {/* //! ------------- Кнопка: Зарегистрироваться ------------- */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnSubmit}
                  onPress={keboardHideAndSubmit}
                >
                  <Text style={styles.btnSubmitTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
                {/* //! ____________ Кнопка "Зарегистрироваться" ______________ */}




              </View>
              {/* //! ________________ контейнер: form ________________ */}
            </View>
            {/* //! __________________ Белый контейнер __________________ */}
          </KeyboardAvoidingView>
        </ImageBackground>
        {/* //! __________________________ Фоновый image __________________________ */}
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

    // resizeMode: "cover",
    // // alignItems: 'center', //? 2.14
    // // justifyContent: "center",
    // justifyContent: "flex-end",

    //! _react-native-strakhura
    width: '100%',
    height: '100%',
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
  //! Input: Логин + Email + Пароль
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
  //! Кнопка: Зарегистрироваться
  btnSubmit: {
    marginTop: 43,
    height: 51,
    width: 343,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  btnSubmitTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
});
