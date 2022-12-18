import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";

//!firebase
import { db } from "../../firebase/config";
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";

//!icons
import { AntDesign } from "@expo/vector-icons";
//-------------------------------------------------------------------------------

const CommentsScreen = () => {
  //! useState
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);


  const createPost = async () => {
    await addDoc(collection(doc(collection(db, "posts"), postId), "comments"), {
      comment,
      userName,
    });
    // other variant:
    // const collectionPosts = collection(db, "posts");
    // const docPost = doc(collectionPosts, postId);
    // const collectionComments = collection(docPost, "comments");
    // await addDoc(collectionComments, { inputState, userName });
    setComment("");
  };

  const keboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keboardHide}>
      <SafeAreaView style={styles.container}>
        {/* //!-------------------- ИНПУТ -------------------- */}
        <View style={styles.inputContainer}>
          <TextInput
            // style={styles.input}
            placeholder={"Комментировать..."}
            // value={comment}
            // onFocus={() => setIsShowKeyboard(true)}
            // onChangeText={(value) => setComment(value)}
            onChangeText={null}
          />
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={createPost}
          >
            <AntDesign name="arrowup" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        {/* //!_____________________ ИНПУТ _____________________ */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    justifyContent: "flex-end",
    // alignItems: "center",
    marginHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 8,
    height: 50,
    backgroundColor: "#F6F6F6",
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    marginBottom: 8,
  },
  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
});

export default CommentsScreen;