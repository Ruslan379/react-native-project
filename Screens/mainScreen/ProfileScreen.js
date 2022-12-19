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
import { SimpleLineIcons } from "@expo/vector-icons";


//------------------------------------------------------------------------------
const ProfileScreen = () => {
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
        <View
          style={{
            ...styles.whiteContainer,
            // marginBottom: isShowKeyboard ? 150 : 0,
          }}
        >
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
                <View style={styles.postCard}>

                  <Image
                    style={styles.photoFrame}
                    source={{ uri: item.uploadPhotoUrl }}
                  />

                  <Text style={styles.title}>{item.title}</Text>

                  <View style={styles.linkContainer}>
                    <FontAwesome
                      style={styles.commentIcon}
                      name="comment"
                      size={24}
                      color="#FF6C00"
                    />
                    <TouchableOpacity
                      style={styles.locationLink}
                      onPress={() =>
                        navigation.navigate("Map", { location: item.location })
                      }
                    >
                      <SimpleLineIcons
                        name="location-pin"
                        size={24}
                        color="#BDBDBD"
                      />
                      <Text style={styles.locationDescr}>
                        {item.locationDescr}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            ></FlatList>
          )}

        </View>
        {/* //! __________________ Белый контейнер __________________ */}

      </ImageBackground>
      {/* //! __________________________ Фоновый image __________________________ */}
    </View>
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
    height: 549,
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
  postCard: {
    marginBottom: 35,
  },
  uploadPhotoUrl: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 11,
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




//todo ---> OLD
// const ProfileScreen = () => {
//   //!  Выход из регистрации --> SignOut (Кнопка: Log-out)
//   const dispatch = useDispatch();
//   const signOut = () => {
//     dispatch(authSignOutUser());
//   };


//   return (
//     <>
//       {/* //! ------------- Кнопка: Log-out ------------- */}
//       <TouchableOpacity
//         activeOpacity={0.8}
//         style={styles.btnLogOut}
//         // onPress={keboardHideAndSubmit}
//         onPress={() => {
//           console.log("PostsScreen-->Log Out");
//           signOut(); //!  Выход из регистрации
//           // keboardHideAndSubmit()
//           // navigation.navigate("CommentsScreen")
//           // navigation.navigate('Home', { screen: "MapScreen" })
//           // navigation.navigate('useRoute', { screen: "Register" })
//         }}
//       >
//         <Image
//           source={require("../../assets/icons/log-out.png")}
//           // source={image}
//           style={{
//             width: 24,
//             height: 24,
//           }}
//         />
//       </TouchableOpacity>
//       {/* //! ____________ Кнопка Log-out ______________ */}



//       <View style={styles.container}>
//         <Text>Profile Screen</Text>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   //! Кнопка Log-out
//   btnLogOut: {
//     marginTop: 54,
//     marginRight: 16,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "flex-end",
//     // backgroundColor: "#FFFFFF",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default ProfileScreen;