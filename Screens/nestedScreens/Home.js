//! OLD PostsScreen
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("MapScreen")}
        activeOpacity={0.8}
        style={styles.goToLoginPage}
      >
        <Text style={styles.goToLoginPageText}>
          Go to map
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CommentsScreen")}
        activeOpacity={0.8}
        style={styles.goToLoginPage}
      >
        <Text style={styles.goToLoginPageText}>
          Go to Comments
        </Text>
      </TouchableOpacity>

      {/* <Button title="go to map" onPress={() => navigation.navigate("MapScreen")} /> */}
      {/* <Button title="go to Comments" onPress={() => navigation.navigate("CommentsScreen")} /> */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //! Кнопка: Уже есть аккаунт? Войти
  goToLoginPage: {
    alignItems: "center",
    marginTop: 16,
  },
  //! Текст кнопки: Уже есть аккаунт? Войти
  goToLoginPageText: {
    color: "#000000",
    fontFamily: "Roboto-Regular",
  },
});

export default Home;