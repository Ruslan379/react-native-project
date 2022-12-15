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


//-------------------------------------------------------------------------------
const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("Home-->route.params:", route.params); //!
  // const { latitude, longitude, photo } = route.params; //! Мой вариант
  // console.log("Home-->latitude:", latitude); //! Мой вариант
  // console.log("Home-->longitude:", longitude); //! Мой вариант

  //! Конспект
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts); //!


  //! Мой вариант
  // useEffect(() => {
  //   if (photo) {
  //     setPosts((prevState) => [...prevState, { photo }]);
  //   }
  // }, [photo]);
  // console.log("posts", posts); //!



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
                source={{ uri: item.photo }}
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