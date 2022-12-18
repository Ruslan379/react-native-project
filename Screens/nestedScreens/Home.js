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

import { db } from "../../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";


//-------------------------------------------------------------------------------
const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("Home-->route.params:", route.params); //!
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


  //! Получение постов с Firebase
  const getAllPosts = async () => {
    await onSnapshot(collection(db, "posts"), (data) => {
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log("posts", posts); //!

  return (
    <>
      <View style={styles.container}>
        {/* <Text>Home</Text> */}
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
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
            </View>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("MapScreen")}
        // onPress={() => navigation.navigate("MapScreen", { location: item.location })}
        // onPress={() => navigation.navigate("MapScreen", { latitude, longitude })} //! Мой вариант
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
    // alignItems: "center",
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