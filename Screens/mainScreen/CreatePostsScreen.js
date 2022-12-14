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
  TouchableWithoutFeedback,
} from "react-native";

import { Camera } from "expo-camera";
import * as Location from "expo-location";

//!icons
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

//!firebase
import { storage } from "../../firebase/config";
import { db } from "../../firebase/config";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";


// -------------------------------------------------------------------
const initialState = {
  title: "",
  locationDescr: "",
};


const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState(null); //?

  // const [latitude, setLatitude] = useState(null); //! Мой вариант
  // const [longitude, setLongitude] = useState(null); //! Мой вариант

  const [inputState, setInputState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [resetCamera, setResetCamera] = useState(false); //todo --------------------------------------------

  //! Закрытие клавиатуры
  const keboardHide = () => {
    setIsShowKeyboard(false);
    // setIsFocusedLogin(false);
    // setIsFocusedMail(false);
    Keyboard.dismiss();
  };


  const toggleCamera = () => {
    setResetCamera(!resetCamera);
    // setResetCamera(true);
  };

  const { userId, nickname } = useSelector((state) => state.auth);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status); //!
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      // let location = await Location.getCurrentPositionAsync({}); //??????
      //! Manual entry location
      //* 50.485723, 30.521819
      // const location = {
      //   timestamp: 1671381599684,
      //   mocked: false,
      //   coords: {
      //     altitude: 129.3000030517578,
      //     heading: 0,
      //     latitude: 50.485723,
      //     longitude: 30.521819,
      //     altitudeAccuracy: 1
      //   },
      // }
      //! Automatic entry location
      const location = await Location.getCurrentPositionAsync(); //?
      setLocation(location); //?

      // setResetCamera(true)
      toggleCamera()
      console.log("useEffect-->resetCamera:", resetCamera); //!
      console.log("useEffect-->photo:", photo); //!
    })();
  }, []);


  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return;
  }

  if (!permission.granted) {
    requestPermission();
  }



  //!  Создаем ФОТО (photo) + Получаем ОТНОСИТЕЛЬНУЮ ссылку на ФОТО (photo)
  const takePhoto = async () => {
    const shot = await camera.takePictureAsync();
    //! ---- Можно УДАЛИТЬ -----
    // const location = await Location.getCurrentPositionAsync(); //! КОНСПЕКТ
    console.log("location:", location); //! КОНСПЕКТ
    console.log("latitude", location.coords.latitude); //! КОНСПЕКТ
    console.log("longitude", location.coords.longitude) //! КОНСПЕКТ
    //! ____ Можно УДАЛИТЬ ____
    setPhoto(shot.uri);
    // setLatitude(location.coords.latitude); //! Мой вариант
    // setLongitude(location.coords.longitude); //! Мой вариант
    console.log("Camera-->photo:", shot); //!
  };



  //! Удаление ФОТО (photo)
  const deletePhoto = () => {
    setPhoto(null);
    console.log("deletePhoto:", photo); //!
  };



  //! Отправка ФОТО (photo) на Storage + Получение АБСОЛЮТНОЙ ссылки на на ФОТО (photo)
  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();
    const photoId = uuid.v4();
    console.log("photoId:", photoId); //!
    const storageRef = ref(storage, `postImage/${photoId}`);
    // console.log("storageRef:", storageRef); //!
    await uploadBytes(storageRef, file);

    //! FirebaseError: Firebase Storage: User does not have permission to access 'postImage/f0c83595-27ef-4814-bcb9-e4571c070400'. (storage/unauthorized)
    //?  ++++ Rules Firebase Storage-All: ++++
    // service firebase.storage {
    //   match / b / { bucket } / o {
    //     match / { allPaths=**} {
    //        allow read, write; //! Заменить на ЭТО
    //     }
    //   }
    // }
    //?  ++++ Rules Firebase Storage-auth: ++++
    // rules_version = '2';
    //     service firebase.storage {
    //       match / b / { bucket } / o {
    //         match / { allPaths=**} {
    //         allow read, write: if request.auth != null; //! Заменить на ЭТО
    //     }
    //   }
    // }
    //_______________________________________________________________________________________________________________________________
    const photoUrl = await getDownloadURL(ref(storage, `postImage/${photoId}`));
    console.log("photoUrl:", photoUrl); //!
    return photoUrl;
  };



  //! Отправка данных на Cloud Firestore
  const handleSendData = async () => {
    const uploadPhotoUrl = await uploadPhotoToServer(); //! Получаем абсолютную ссылку на photo
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    // const location = await Location.getCurrentPositionAsync();
    try {
      console.log("uploadPhotoUrl:", uploadPhotoUrl); //!
      console.log("location:", location); //!

      //?  ++++ Rules Cloud Firestore-auth: ++++
      // rules_version = '2';
      //   service cloud.firestore {
      //     match / databases / { database } / documents {
      //       match / { document=**} {
      //         allow read, write: if request.auth != null; //! Заменить на ЭТО
      //     }
      //   }
      // }
      //_______________________________________________________________________________________________________________________________
      //! ---- Отправка данных на Cloud Firestore ----
      await addDoc(collection(db, "posts"), {
        uploadPhotoUrl,
        title: inputState.title,
        locationDescr: inputState.locationDescr,
        location: location.coords,
        userId,
        nickname,
      });
      //! ____ Отправка данных на Cloud Firestore ____
    } catch (e) {
      Alert.alert("Error adding document: ", e.message);
      console.error("Error adding document: ", e);
    }
    console.log("inputState.title:", inputState.title); //!
    console.log("inputState.locationDescr:", inputState.locationDescr); //!
    console.log("location.coords:", location.coords); //!
    console.log("userId:", userId); //!
    console.log("nickname:", nickname); //!

    // navigation.navigate("Home", { uploadPhotoUrl });
    // navigation.navigate("Home", { photo, latitude, longitude }); //! Мой вариант

    setInputState(initialState);
    setErrorMsg(null);

    toggleCamera();
    console.log("resetCamera:", resetCamera); //!

    setPhoto(null);

    navigation.navigate("Home");
  };



  return (
    <TouchableWithoutFeedback onPress={keboardHide}>
      <View
        // style={styles.container}
        style={{
          ...styles.container,
          marginTop: isShowKeyboard ? -100 : 0,
        }}
      >
        <Camera
          style={styles.camera}
          ref={setCamera}
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
          // onPress={uploadPhotoToServer} //! для теста
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 150
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
    marginTop: 203,
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