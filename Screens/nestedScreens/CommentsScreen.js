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

const CommentsScreen = ({ route }) => {
  console.log("CommentsScreen-->route.params:", route.params); //!
  const { postId, photo } = route.params;

  const { nickname } = useSelector((state) => state.auth);

  //! useState
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);


  const getAllComments = async () => {
    await onSnapshot(
      collection(doc(collection(db, "posts"), postId), "comments"),
      (data) => {
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
  };

  useEffect(() => {
    getAllComments();
  }, []);

  //! Закрытие клавиатуры
  const keboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  //! Создание  и отправка поста на Firestore
  const createPost = async () => {
    await addDoc(collection(doc(collection(db, "posts"), postId), "comments"),
      {
        comment,
        nickname,
      });
    setComment("");
    keboardHide();
  };



  return (
    <TouchableWithoutFeedback onPress={keboardHide}>
      <SafeAreaView style={styles.container}>
        {/* //!-------------------- ИНПУТ -------------------- */}
        <View style={styles.inputContainer}>
          <TextInput
            // style={styles.input}
            placeholder={"Комментировать..."}
            value={comment}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) => setComment(value)}

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
    marginBottom: 16,
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