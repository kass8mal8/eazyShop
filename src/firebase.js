// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaYEfbQHLmdV_lHwka5IzWh08dDYmn4hE",
  authDomain: "eazy-shop-157bf.firebaseapp.com",
  projectId: "eazy-shop-157bf",
  storageBucket: "eazy-shop-157bf.appspot.com",
  messagingSenderId: "198553110238",
  appId: "1:198553110238:web:6db880a8d2aa32e3f6e44f"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)
  
