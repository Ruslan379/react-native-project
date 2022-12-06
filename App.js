import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <Text style={{ color: "green", fontSize: 20 }}>Open up App.js to start working on your app!</Text>
      <Text style={{ color: "red", fontSize: 25 }}>Open up App.js to start working on your app twice!</Text>
      <Text style={{ color: "blue", fontSize: 30 }}>Open up App.js to start working on your app thrice!</Text> */}

      <View style={styles.innerBox}>
        <Text style={styles.textFirst}>Open up App.js to start working on your app!</Text>
      </View>

      <Text style={styles.textTwice}>Open up App.js to start working on your app twice!</Text>
      <Text style={styles.textThrice}>Open up App.js to start working on your app thrice!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFirst: {
    color: "red",
    fontSize: 40
  },
  textTwice: {
    color: "green",
    fontSize: 30
  },
  textThrice: {
    color: "blue",
    fontSize: 20
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 40,
    width: 300
  },
});
