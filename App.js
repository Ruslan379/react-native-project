import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "green" }}>Open up App.js to start working on your app!</Text>
      <Text style={{ color: "red" }}>Open up App.js to start working on your app twice!</Text>
      <Text style={{ color: "blue" }}>Open up App.js to start working on your app thrice!</Text>
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
});
