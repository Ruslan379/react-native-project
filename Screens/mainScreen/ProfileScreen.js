import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground
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
        // setUserPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  };

  useEffect(() => {
    getUserPosts();
  }, []);



  return (
    <>
      {/* //! ------------- Кнопка: Log-out ------------- */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnLogOut}
        // onPress={keboardHideAndSubmit}
        onPress={() => {
          console.log("PostsScreen-->Log Out");
          signOut(); //!  Выход из регистрации
          // keboardHideAndSubmit()
          // navigation.navigate("CommentsScreen")
          // navigation.navigate('Home', { screen: "MapScreen" })
          // navigation.navigate('useRoute', { screen: "Register" })
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



      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  //! Кнопка Log-out
  btnLogOut: {
    marginTop: 54,
    marginRight: 16,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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