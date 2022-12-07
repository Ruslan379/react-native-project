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
} from 'react-native';

import * as Font from 'expo-font';
// import { AppLoading } from 'expo'; //! уже устарело!!!
import AppLoading from 'expo-app-loading';



// -------------------------------------------------------------------------------------------------------

const initialState = {
  email: "",
  password: ""
}


//! Загрузка шрифтов
const loadApplication = async () => {
  await Font.loadAsync({
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf")
  })
};


export default function App() {
  console.log(Platform.OS); //!
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);


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

  //! Проверка наличия шрифтов
  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/stars-on-night.jpg")}
        >
          <KeyboardAvoidingView
          //! не работает на Android
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* <View style={styles.form}> */}
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello again</Text>
                <Text style={styles.headerTitle}>Welcome back</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                />
              </View>

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
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    // alignItems: 'center',
    // justifyContent: "center",
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 10,
    // marginHorizontal: 40,
    color: "#f0f8ff",
  },
  form: {
    marginHorizontal: 40,
    // marginBottom: 100,
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "DMMono-Regular"
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
  header: {
    alignItems: 'center',
    marginBottom: 100,
  },
  headerTitle: {
    fontSize: 30,
    color: "#f0f8ff",
    fontFamily: "DMMono-Regular"
  },
});
