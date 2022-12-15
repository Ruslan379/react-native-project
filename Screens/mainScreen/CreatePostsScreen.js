import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
} from "react-native";

import { Camera } from "expo-camera";
import * as Location from "expo-location";



//!icons
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";

// import { storage } from "../../firebase/config";
// import { db } from "../../firebase/config";


// -------------------------------------------------------------------
const initialState = {
  title: "",
  locationDescr: "",
};


const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const [inputState, setInputState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  // const { userId, userName } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    requestPermission();
  }
  //! Получение ссылки на ФОТО (photo)
  const takePhoto = async () => {
    const shot = await camera.takePictureAsync();
    setPhoto(shot.uri);
    console.log("Camera-->photo:", photo); //!
  };

  //! Удаление ФОТО (photo)
  const deletePhoto = async () => {
    setPhoto("");
    console.log("deletePhoto:", photo); //!
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();
    const photoId = uuid.v4();
    // const storageRef = ref(storage, `postImage/${photoId}`);
    // await uploadBytes(storageRef, file);
    // const photoUrl = await getDownloadURL(ref(storage, `postImage/${photoId}`));
    // return photoUrl;
    return photoId //! это ЗАГЛУШКА --> убрать!!!
  };

  const handleSendData = async () => {
    const photo = await uploadPhotoToServer();
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    const location = await Location.getCurrentPositionAsync();
    try {
      console.log("location:", location);
      // await addDoc(collection(db, "posts"), {
      //   photo,
      //   title: inputState.title,
      //   locationDescr: inputState.locationDescr,
      //   location: location.coords,
      //   userId,
      //   userName,
      // });
    } catch (e) {
      Alert.alert("Error adding document: ", e.message);
      console.error("Error adding document: ", e);
    }
    navigation.navigate("PostsScreen");
    setInputState(initialState);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={setCamera}
      // ratio="1:1"
      >
        {photo && (
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: photo }}
              style={styles.photo}
            />
          </View>
        )}
        <View style={styles.snapContainer}>
          <TouchableOpacity
            // onPress={takePhoto}
            onPress={() => {
              console.log("Take a photo"); //!
              takePhoto();
            }}
          >
            <Fontisto name="camera" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Название..."}
          value={inputState.title}
          onFocus={() => setIsShowKeyboard(true)}
          onChangeText={(value) =>
            setInputState((prev) => ({ ...prev, title: value }))
          }
        />
        <View style={styles.locationInputContainer}>
          <SimpleLineIcons
            style={styles.locationIcon}
            name="location-pin"
            size={24}
            color="#BDBDBD"
          />
          <TextInput
            style={styles.locationInput}
            placeholder={"Местность..."}
            value={inputState.locationDescr}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setInputState((prev) => ({ ...prev, locationDescr: value }))
            }
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSendData}
        activeOpacity={0.8}
        style={styles.sendButton}
      >
        <Text style={styles.buttonText}>Опубликовать</Text>
      </TouchableOpacity>

      {/* //! ------------- Кнопка: btnTrash ------------- */}
      <TouchableOpacity
        style={styles.btnTrash}
        activeOpacity={0.8}
        // onPress={() => setPhoto("")}
        onPress={deletePhoto}
      >
        {/* <View style={styles.btnTrash}> */}
        <Image
          source={require("../../assets/icons/trash.png")}
          // source={image}
          style={{
            // backgroundColor: "#000000",
            // color: "#dc143c",
            width: 24,
            height: 24,
          }}
        />
        {/* </View> */}
      </TouchableOpacity>
      {/* //! _____________ Кнопка: btnTrash _____________ */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    position: "relative",
    marginHorizontal: 16,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    // borderWidth: 2,
    // borderColor: "red",
    // borderRadius: 50,
  },
  photoContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 0,
    left: 0,
    // borderRadius: 50,
  },
  photo: {
    flex: 1,
    height: 240,
  },
  snapContainer: {
    width: 60,
    height: 60,
    // borderWidth: 2,
    // borderColor: "red",
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginHorizontal: 16,
    marginTop: 48,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  locationInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  locationIcon: {
    marginRight: 8,
  },
  locationInput: {
    flex: 1,
    height: 50,
  },
  sendButton: {
    justifyContent: "center",
    marginTop: 32,
    marginHorizontal: 16,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  //! Кнопка: btnTrash
  btnTrash: {
    marginTop: 120,
    marginHorizontal: 170,
    // width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    // color: "#FFFFFF",
    borderRadius: 20,
    backgroundColor: "#dcdcdc",
  },
});

export default CreatePostsScreen;