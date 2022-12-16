//*   https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const auth = getAuth(); //*

import { auth } from "../../firebase/config"; //! MY

export const authSignUpUser =
  ({ email, password, nickname }) =>
    async (dispatch, getState) => {
      console.log("nickname:", nickname);
      console.log("email:", email);
      console.log("password:", password);
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("user", user);
      } catch (error) {
        Alert.alert(error.message);
        console.log(error);
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