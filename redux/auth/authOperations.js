//*   https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import app from "../../firebase/config"; //! MY

const auth = getAuth(app); //*

// import { auth } from "../../firebase/config"; //! MY

//! Регистрация
export const authSignUpUser = ({ email, password, nickname }) =>
  async (dispatch, getState) => {
    console.log("SignUp-->nickname:", nickname); //!
    console.log("SignUp-->email:", email); //!
    console.log("SignUp-->password:", password); //!
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user:", user); //!
      console.log("user.displayName:", user.displayName); //!
      console.log("user.email:", user.email); //!
      console.log("user.uid:", user.uid); //!
    } catch (error) {
      Alert.alert(error.message);
      console.log("error:", error);
      console.log("error.code:", error.code);
      console.log("error.message:", error.message);
    }
  };

//! Войти
export const authSignInUser = ({ email, password }) =>
  async (dispatch, getState) => {
    console.log("SignIn-->email:", email); //!
    console.log("SignIn-->password:", password); //!
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("user:", user); //!
      // console.log("user.displayName:", user.displayName); //!
      // console.log("user.email:", user.email); //!
      // console.log("user.uid:", user.uid); //!
    } catch (error) {
      Alert.alert(error.message);
      console.log("error:", error);
      console.log("error.code:", error.code);
      console.log("error.message:", error.message);
    }
  };



//todo не рботает
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// import { auth } from "../../firebase/config";
// import { authSlice } from "./authReducer";
// import { Alert } from "react-native";

// export const authSignUpUser =
//   ({ email, password }) =>
//     async (dispatch, getState) => {
//       try {
//         const { user } = await signInWithEmailAndPassword(auth, email, password);
//         dispatch(
//           authSlice.actions.updateUserProfile({
//             userId: user.uid,
//             userName: user.displayName,
//           })
//         );
//         dispatch(authSlice.actions.stateChange({ stateChange: true }));
//       } catch (error) {
//         Alert.alert(error.message);
//         console.log(error);
//       }
//     };


//todo Документация с сайта
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });