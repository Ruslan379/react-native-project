// // import * as firebase from "firebase"; //!  КОНСПЕКТ
// // import "firebase/auth"; //!  КОНСПЕКТ
// //! MY
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";


// //! MY
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAA2bIcy0EMJV0AKwnC_AW5FlsojluLGVE",
//   authDomain: "react-native-project-fson52.firebaseapp.com",
//   projectId: "react-native-project-fson52",
//   storageBucket: "react-native-project-fson52.appspot.com",
//   messagingSenderId: "335714079621",
//   appId: "1:335714079621:web:0461a01c87cf81111deaec",
//   measurementId: "G-27Z3FCXWP8"
// };


// // Initialize Firebase
// // export default firebase.initializeApp(firebaseConfig);  //!  КОНСПЕКТ

// const app = initializeApp(firebaseConfig); //! MY

// const analytics = getAnalytics(app); //! MY

// export const auth = getAuth(app);

// export const storage = getStorage(app);

// export const db = getFirestore(app);



//!  ------------- Документация с сайта -------------
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyAA2bIcy0EMJV0AKwnC_AW5FlsojluLGVE",
//   authDomain: "react-native-project-fson52.firebaseapp.com",
//   projectId: "react-native-project-fson52",
//   storageBucket: "react-native-project-fson52.appspot.com",
//   messagingSenderId: "335714079621",
//   appId: "1:335714079621:web:0461a01c87cf81111deaec",
//   measurementId: "G-27Z3FCXWP8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);




//!  ------------- Конспект -------------
import * as firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA2bIcy0EMJV0AKwnC_AW5FlsojluLGVE",
  authDomain: "react-native-project-fson52.firebaseapp.com",
  projectId: "react-native-project-fson52",
  storageBucket: "react-native-project-fson52.appspot.com",
  messagingSenderId: "335714079621",
  appId: "1:335714079621:web:0461a01c87cf81111deaec",
  measurementId: "G-27Z3FCXWP8"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)