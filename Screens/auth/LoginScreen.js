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


// -------------------------------------------------------------------------------------------------------
const initialState = {
  email: "",
  password: ""
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default function LoginScreen() {
  console.log(Platform.OS); //!
  //! useState
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const keboardHide = () => {
    setIsShowKeyboard(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    Keyboard.dismiss();
  };

  const keboardHideAndSubmit = () => {
    setIsShowKeyboard(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    Keyboard.dismiss();
    console.log("state:", state); //!
    setState(initialState);
  }

  //! _react-native-strakhura
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;



  return (
    <TouchableWithoutFeedback onPress={keboardHide}>

      <View style={styles.container}>
        {/* //! ------------------ Фоновый image --------------------- */}
        <ImageBackground
          style={{
            ...styles.image,
            width: windowWidth,
            height: windowHeight,
            position: 'absolute',
            top: 0,
            left: 0
          }}
          // source={require("../../assets/images/stars-on-night.jpg")}
          source={require("../../assets/images/Photo_BG.png")}
        >
          <KeyboardAvoidingView
          //! не корректно работает на Android
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* //! ------------------ Белый контейнер---------------------- */}
            <View
              style={{
                ...styles.whiteContainer,
                marginBottom: isShowKeyboard ? 75 : 0,
              }}
            >


              {/* //! ---------------- контейнер: form ---------------- */}
              <View style={styles.form}>


                {/* //! ------------- текст: Войти ------------ */}
                <Text style={styles.headerTitle}>Войти</Text>
                {/* //! _____________ текст: Войти ____________ */}



                {/* //! ------ Input: Адрес электронной почты ----- */}
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isFocusedMail ? "#FFFFFF" : "#F6F6F6",
                    color: isFocusedMail ? "#212121" : "#BDBDBD",
                    borderColor: isFocusedMail ? "#FF6C00" : "#E8E8E8",
                    marginTop: 32,
                    marginBottom: 16,
                  }}
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



                {/* //! ------------- Кнопка: Войти ------------- */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnSubmit}
                  onPress={keboardHideAndSubmit}
                >
                  <Text style={styles.btnSubmitTitle}>Войти</Text>
                </TouchableOpacity>
                {/* //! ____________ Кнопка: Войти ______________ */}



                {/* //! ---------- Кнопка: Нет аккаунта? Зарегистрироваться ------------ */}
                <TouchableOpacity
                  onPress={() => console.log("Переход на страницу Registration")}
                  activeOpacity={0.8}
                  style={styles.goToLoginPage}
                >
                  <Text style={styles.goToLoginPageText}>
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </TouchableOpacity>
                {/* //! ___________ Кнопка: Нет аккаунта? Зарегистрироваться __________ */}
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
    //? Конспект
    // resizeMode: "cover",
    justifyContent: "flex-end",
    //? _react-native-strakhura
    width: '100%',
    height: '100%',
  },
  //! Белый контейнер
  whiteContainer: {
    backgroundColor: "#ffffff",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    marginBottom: 0,
  },
  //! Контейнер: form
  form: {
    alignItems: 'center',
  },
  //! текст: Войти
  headerTitle: {
    color: "#000000",
    fontSize: 30,
    marginTop: 32,
    fontFamily: "Roboto-Medium",
  },
  //! Input: Email + Пароль
  input: {
    marginHorizontal: 16,
    paddingLeft: 16,
    width: 343,
    // width: '100%',
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    placeholderTextColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
  },
  //! Кнопка: Войти
  btnSubmit: {
    marginTop: 43,
    height: 51,
    width: 343,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  //! Текст кнопки: Войти
  btnSubmitTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  //! Кнопка: Нет аккаунта? Зарегистрироваться
  goToLoginPage: {
    alignItems: "center",
    marginTop: 16,
  },
  //! Текст кнопки: Нет аккаунта? Зарегистрироваться
  goToLoginPageText: {
    color: "#000000",
    fontFamily: "Roboto-Regular",
  },
});
