//! OLD PostsScreen
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("MapScreen")}
        activeOpacity={0.8}
        style={styles.navigationBtn}
      >
        <Text style={styles.navigationBtnText}>
          Go to map
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CommentsScreen")}
        activeOpacity={0.8}
        style={styles.navigationBtn}
      >
        <Text style={styles.navigationBtnText}>
          Go to Comments
        </Text>
      </TouchableOpacity>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //! Кнопки: Go to map & Go to Comments
  navigationBtn: {
    alignItems: "center",
    // marginTop: 16,
    marginBottom: 30,
  },
  //! Текст кнопок: Go to map & Go to Comments
  navigationBtnText: {
    color: "red",
    fontFamily: "Roboto-Regular",
  },
});

export default Home;