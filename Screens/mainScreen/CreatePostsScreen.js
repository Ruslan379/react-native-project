import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";


// -------------------------------------------------------------------
const CreatePostsScreen = () => {
  const [snap, setSnap] = useState(null);
  // const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    // const photo = await camera.takePictureAsync();
    // setPhoto(photo.uri);
    console.log("Camera-->photo:", snap); //!
  };


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setSnap}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.snapContainer}
          // onPress={takePhoto}
          onPress={() => {
            console.log("Take a photo"); //!
            takePhoto();
          }}
        >
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>

      {/* <TouchableOpacity
        activeOpacity={0.8}
        style={styles.snapContainer}
        onPress={() => {
          console.log("Take a photo");
        }}
      >
        <Text style={styles.snap}>SNAP</Text>
      </TouchableOpacity> */}

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
    flex: 1,
    // height: 300,
    // marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    // marginTop: 200,
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
});

export default CreatePostsScreen;




//! Конспект
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";
// const CreatePostsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera}>
//         <TouchableOpacity onPress={() => { }} style={styles.snapContainer}>
//           <Text style={styles.snap}>SNAP</Text>
//         </TouchableOpacity>
//       </Camera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     height: 300,
//     marginTop: 50,
//     alignItems: "center",
//   },
//   snap: {
//     color: "#fff",
//   },
//   snapContainer: {
//     marginTop: 200,
//     borderWidth: 1,
//     borderColor: "#ff0000",
//     width: 70,
//     height: 70,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default CreatePostsScreen;
