// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWVPa16GB02ealKvJ1dS_vpjeum3vI_Ng",
  authDomain: "react-native-firebase-6e5b7.firebaseapp.com",
  projectId: "react-native-firebase-6e5b7",
  storageBucket: "react-native-firebase-6e5b7.appspot.com",
  messagingSenderId: "1020039088178",
  appId: "1:1020039088178:web:40d2f21e32c7969f86942b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;