//! Конспект 2
// import db from "../../firebase/config"; //?


export const authSignUpUser = ({ email, password, nickname }) => async (
  dispatch,
  getState
) => {
  console.log("nickname:", nickname);
  console.log("email:", email);
  console.log("password:", password);
  try {
    const user = await db
      .auth()
      .createUserWithEmailAndPassword(email, password);

    console.log("user", user);
  } catch (error) {
    console.log("error", error);

    console.log("error.message", error.message);
  }
};

//! Конспект 1
// // import db from "../../firebase/config";
// //! db заменить на app
// import { app } from "../../firebase/config";


// export const authSignUpUser = ({ email, password, nickname }) => async (
//   dispatch,
//   getState
// ) => {
//   console.log("nickname:", nickname);
//   console.log("email:", email);
//   console.log("password:", password);
//   try {
//     // const user = await db //! db заменить на app
//     const user = await app
//       .auth()
//       .createUserWithEmailAndPassword(email, password);
//     console.log("user:", user);
//   } catch (error) {
//     console.log("error", error);
//     console.log("error.message", error.message);
//   }
// };

// export const authSignInUser = () => async (dispatch, getState) => { };

// export const authSignOutUser = () => async (dispatch, getState) => { };


//! не рботает
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



// //! Документация с сайта
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