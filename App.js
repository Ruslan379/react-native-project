import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';



export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/stars-on-night.jpg")}
      >
        <View style={styles.form}>

          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
            />
          </View>

          {/* <Button
            // onPress={onPressLearnMore}
            // title="SIGN IN"/
          // color="#841584"
          // accessibilityLabel="Learn more about this purple button"
          /> */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
          >
            <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: Platform.OS === "ios" ? "transparent" : "#ffb6c1",
    height: 40,
    borderRadius: 10,
    marginTop: 40,
    marginHorizontal: 20,
    color: "#f0f8ff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
});
