import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>

      {/* <Text style={{ color: "green", fontSize: 20 }}>Open up App.js to start working on your app!</Text>
      <Text style={{ color: "red", fontSize: 25 }}>Open up App.js to start working on your app twice!</Text>
      <Text style={{ color: "blue", fontSize: 30 }}>Open up App.js to start working on your app thrice!</Text> */}

      <View style={styles.innerBox}>
        <Text style={styles.textFirst}>Open App.js to start working on your app for the FIRST time!</Text>
      </View>

      <Text style={styles.textSecond}>Open App.js to start working on your app a SECOND time!</Text>
      <Text style={styles.textThird}>Open App.js to start working on your app a THIRD time!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//! JS-объект со стилями
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#ffd700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFirst: {
    color: "red",
    fontSize: 30
  },
  textSecond: {
    color: "green",
    fontSize: 25
  },
  textThird: {
    color: "blue",
    fontSize: 20
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 30,
    padding: 40,
    width: 300,
    backgroundColor: "#61dafb",
    // textAlign: "center",
  },
});
