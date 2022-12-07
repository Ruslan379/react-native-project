import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/stars-on-night.jpg")}
      >
        <View style={styles.form}>

          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
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
            style={styles.btn}
          >


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
    justifyContent: "center"
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
    backgroundColor: '#ffb6c1',
  },
});
