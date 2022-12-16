//!MY
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


//!MY
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA2bIcy0EMJV0AKwnC_AW5FlsojluLGVE",
  authDomain: "react-native-project-fson52.firebaseapp.com",
  projectId: "react-native-project-fson52",
  storageBucket: "react-native-project-fson52.appspot.com",
  messagingSenderId: "335714079621",
  appId: "1:335714079621:web:0461a01c87cf81111deaec",
  measurementId: "G-27Z3FCXWP8"
};

//? OLD
// const firebaseConfig = {
//   apiKey: "AIzaSyCc_k6htdZA_FJnxr91kTDhLcI2LKkqvlY",
//   authDomain: "rn-social-dd584.firebaseapp.com",
//   projectId: "rn-social-dd584",
//   storageBucket: "rn-social-dd584.appspot.com",
//   messagingSenderId: "773501439875",
//   appId: "1:773501439875:web:3170cacbdc33fd3c1b30b6",
//   measurementId: "G-4DJSQQ2FY8",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig); //!MY
const analytics = getAnalytics(app); //!MY

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);



