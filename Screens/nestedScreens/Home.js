//! OLD PostsScreen
import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

//!firebase
import { db } from "../../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

//!icons
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

//-------------------------------------------------------------------------------
// const Home = ({ route, navigation }) => {
const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  // console.log("Home-->route.params:", route.params); //!
  // const { latitude, longitude, uploadPhotoUrl } = route.params; //! Мой вариант
  // console.log("Home-->latitude:", latitude); //! Мой вариант
  // console.log("Home-->longitude:", longitude); //! Мой вариант

  //! Конспект - Получение постов с CreatePostsScreen
  // useEffect(() => {
  //   if (route.params) {
  //     setPosts((prevState) => [...prevState, route.params]);
  //   }
  // }, [route.params]);

  //! Мой вариант - - Получение постов с CreatePostsScreen
  // useEffect(() => {
  //   if (uploadPhotoUrl) {
  //     setPosts((prevState) => [...prevState, { uploadPhotoUrl }]);
  //   }
  // }, [uploadPhotoUrl]);
  // console.log("posts", posts); //!


  //! Получение постов с Firestore
  const getAllPosts = async () => {
    await onSnapshot(
      collection(db, "posts"),
      (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, })));
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log("Home-->posts:", posts); //!

  return (
    // <>
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      {posts && (
        <FlatList
          data={posts}
          // keyExtractor={(item, indx) => indx.toString()}
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

              {/* <View
                style={{
                  marginBottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.uploadPhotoUrl }}
                  style={{ width: 350, height: 200 }}
                />
              </View> */}
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



    //todo --------------------  OLD --------------------
    // {/* <TouchableOpacity
    //   onPress={() => navigation.navigate("MapScreen")}
    //   // onPress={() => navigation.navigate("MapScreen", { location: item.location })}
    //   // onPress={() => navigation.navigate("MapScreen", { latitude, longitude })} //! Мой вариант
    //   activeOpacity={0.8}
    //   style={styles.navigationBtn}
    // >
    //   <Text style={styles.navigationBtnText}>
    //     Go to map
    //   </Text>
    // </TouchableOpacity>

    // <TouchableOpacity
    //   onPress={() => navigation.navigate("CommentsScreen")}
    //   activeOpacity={0.8}
    //   style={styles.navigationBtn}
    // >
    //   <Text style={styles.navigationBtnText}>
    //     Go to Comments
    //   </Text>
    // </TouchableOpacity> */}
    // </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postCardContainer: {
    marginTop: 32,
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


  // //! Кнопки: Go to map & Go to Comments
  // navigationBtn: {
  //   alignItems: "center",
  //   // marginTop: 16,
  //   marginBottom: 30,
  // },
  // //! Текст кнопок: Go to map & Go to Comments
  // navigationBtnText: {
  //   color: "red",
  //   fontFamily: "Roboto-Regular",
  // },
});

export default Home;