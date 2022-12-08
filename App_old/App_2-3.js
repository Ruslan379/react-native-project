import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/stars-on-night-2.jpg")}>

        {/* <Text style={{ color: "green", fontSize: 20 }}>Open up App.js to start working on your app!</Text>
        <Text style={{ color: "red", fontSize: 25 }}>Open up App.js to start working on your app twice!</Text>
        <Text style={{ color: "blue", fontSize: 30 }}>Open up App.js to start working on your app thrice!</Text> */}

        <View style={styles.innerBoxFirst}>
          <Text style={styles.textFirst}>Open App.js to start working on your app for the FIRST time!</Text>
        </View>

        <View style={styles.innerBoxSecond}>
          <Text style={styles.textSecond}>Open App.js to start working on your app a SECOND time!</Text>
        </View>

        <View style={styles.innerBoxThird}>
          <Text style={styles.textThird}>Open App.js to start working on your app a THIRD time!</Text>
        </View>

        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

//! JS-объект со стилями
const styles = StyleSheet.create({
  //! Основной контейнер
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#ffd700',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  //! ImageBackground
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: "center"
  },
  textFirst: {
    color: "red",
    fontSize: 30
  },
  textSecond: {
    // color: "green",
    color: "#00ff7f",
    fontSize: 25
  },
  textThird: {
    // color: "blue",
    color: "#ffff00",
    fontSize: 20
  },
  innerBoxFirst: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 30,
    padding: 40,
    width: 300,
    backgroundColor: "#6b8e23",
  },
  innerBoxSecond: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 30,
    padding: 30,
    width: 325,
    backgroundColor: "#db7093",
  },
  innerBoxThird: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 30,
    padding: 20,
    width: 350,
    backgroundColor: "#61dafb",
  },
});
