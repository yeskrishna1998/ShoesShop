import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxxx",
  authDomain: "shoesshop-12345.firebaseapp.com",
  projectId: "shoesshop-12345",
  storageBucket: "shoesshop-12345.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
