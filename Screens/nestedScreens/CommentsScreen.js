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


  //! Получение постов с Firestore
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
        {/* //!----------- Комментируемое Фото  ----------- */}
        <Image style={styles.photo} source={{ uri: photo }} />
        {/* //!___________ Комментируемое Фото  ___________ */}

        {/* //!-------------------- Список КОММЕНТАРИЕВ (свои и чужие) -------------------- */}
        <FlatList
          data={allComments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              // style={{ alignItems: "flex-start" }}
              style={
                (item.nickname === nickname)
                  ? { alignItems: "flex-start" }
                  : { alignItems: "flex-end" }
              }
            >
              <View style={styles.commentContainer}>
                <Text style={{ color: "#8b0000", fontStyle: "italic" }}>{item.nickname}</Text>
                <Text style={{ color: "#00008b", fontWeight: "bold" }}>{item.comment}</Text>
              </View>
            </View>
          )}
        >
        </FlatList>
        {/* //!_____________________ Список КОММЕНТАРИЕВ (свои и чужие) _____________________ */}

        {/* //!-------------------- ИНПУТ -------------------- */}
        <View style={styles.inputContainer}>
          <TextInput
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
  photo: {
    minWidth: 343,
    minHeight: 240,
    marginBottom: 8,
    marginTop: 32,
    borderRadius: 8,
  },
  commentContainer: {
    width: 299,
    height: 103,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 6,
    borderTopLeftRadius: 0,
    marginBottom: 24,

  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
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