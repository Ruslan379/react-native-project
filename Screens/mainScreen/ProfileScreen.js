import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

//!firebase
import { db } from "../../firebase/config";
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";


//!  Выход из регистрации --> SignOut (Кнопка: Log-out)
import { authSignOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

//!icons
import { Feather } from "@expo/vector-icons"; //!  Выход из регистрации --> SignOut (Кнопка: Log-out)
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";


//------------------------------------------------------------------------------
const ProfileScreen = ({ navigation }) => {
  //!  Выход из регистрации --> SignOut (Кнопка: Log-out)
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };

  const [userPosts, setUserPosts] = useState([]);

  const { userId, nickname } = useSelector((state) => state.auth);

  //! Получение постов с Firestore
  const getUserPosts = async () => {
    const collectionByUserId = query(collection(db, "posts"), where("userId", "==", userId));
    await onSnapshot(
      collectionByUserId,
      (data) => {
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //!
        setUserPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  };

  useEffect(() => {
    getUserPosts();
  }, []);


  //! _react-native-strakhura 
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  return (
    <View style={styles.container}>
      {/* //! ------------------ Фоновый image --------------------- */}
      <ImageBackground
        style={{
          ...styles.image,
          width: windowWidth,
          height: windowHeight,
          position: 'absolute',
          top: 0,
          left: 0
        }}
        // source={require("../../assets/images/stars-on-night-2.jpg")}
        source={require("../../assets/images/Photo_BG.png")}
      >
        {/* //! ------------------ Белый контейнер---------------------- */}
        <View style={styles.whiteContainer}>

          {/* //! ------------- контейнер: photoFrame ------------ */}
          <View style={styles.photoFrame}></View>
          {/* //! _____________ контейнер: photoFrame _____________ */}


          {/* //! ------------- Кнопка: Log-out ------------- */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnLogOut}
            // onPress={keboardHideAndSubmit}
            onPress={() => {
              console.log("PostsScreen-->Log Out");
              signOut(); //!  Выход из регистрации
            }}
          >
            <Image
              source={require("../../assets/icons/log-out.png")}
              // source={image}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>
          {/* //! ____________ Кнопка Log-out ______________ */}

          <Text style={styles.userName}>{nickname}</Text>

          {userPosts && (
            <FlatList
              data={userPosts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.postCardContainer}>
                  {/* //! -------------- Image -------------- */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate("CommentsScreen", {
                        postId: item.id,
                        photo: item.uploadPhotoUrl,
                      })
                    }
                  >
                    <Image
                      style={styles.uploadPhotoUrl}
                      source={{ uri: item.uploadPhotoUrl }}
                    />
                  </TouchableOpacity>

                  {/* //! ______________ Image ______________ */}

                  {/* //! -------------- Описание -------------- */}
                  <Text style={styles.title}>{item.title}</Text>
                  {/* //! ______________ Описание ______________ */}

                  <View style={styles.linkContainer}>

                    {/* //! --------------- Иконка комментариев --------------- */}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("CommentsScreen", {
                          postId: item.id,
                          photo: item.uploadPhotoUrl,
                        })
                      }
                    >
                      <FontAwesome5
                        style={styles.commentIcon}
                        name="comment"
                        size={24}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                    {/* //! ______________ Иконка комментариев ______________ */}

                    {/* //! --------------- ЛОКАЦИЯ (карта) --------------- */}
                    <TouchableOpacity
                      style={styles.locationLink}
                      onPress={() =>
                        navigation.navigate("MapScreen", { location: item.location })
                      }
                    >
                      <SimpleLineIcons
                        name="location-pin"
                        size={24}
                        color="#BDBDBD"
                      />
                      <Text style={styles.locationDescr}>{item.locationDescr}</Text>
                    </TouchableOpacity>
                    {/* //! ______________ ЛОКАЦИЯ (карта) ______________ */}
                  </View>
                </View>
              )}
            >
            </FlatList>
          )}

        </View>
        {/* //! __________________ Белый контейнер __________________ */}

      </ImageBackground >
      {/* //! __________________________ Фоновый image __________________________ */}
    </View >
  );
};



//! JS-объект со стилями
const styles = StyleSheet.create({

  //! Основной контейнер
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  //! ImageBackground
  image: {
    flex: 1,
    //? Конспект
    // resizeMode: "cover",
    justifyContent: "flex-end",
    //? _react-native-strakhura
    width: '100%',
    height: '100%',
  },
  //! Белый контейнер
  whiteContainer: {
    backgroundColor: "#ffffff",
    height: 665,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    marginBottom: 0,
  },
  //! photoFrame
  photoFrame: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    marginTop: -60,
    borderRadius: 16,
  },
  //! Кнопка Log-out
  btnLogOut: {
    top: 22,
    right: 16,
    position: "absolute",
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginTop: 32,
    marginBottom: 33,
    color: "#212121",
  },
  postCardContainer: {
    marginBottom: 32,
  },
  uploadPhotoUrl: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    marginBottom: 11,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationLink: {
    flexDirection: "row",
  },
  locationDescr: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
});

export default ProfileScreen;

