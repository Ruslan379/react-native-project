import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Create Posts Screen</Text> */}
      <Camera style={styles.camera}>
        <TouchableOpacity
          style={styles.snapContainer}
          onPress={() => { }}
        >
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  camera: {
    height: 300,
    marginTop: 50,
    alignItems: "center",
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
