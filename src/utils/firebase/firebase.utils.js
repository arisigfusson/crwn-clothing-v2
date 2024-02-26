// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB79S7evFMDx7A6AHnQdXp9u9nNdrQtcDA",
  authDomain: "crwn-clothing-db-4b166.firebaseapp.com",
  projectId: "crwn-clothing-db-4b166",
  storageBucket: "crwn-clothing-db-4b166.appspot.com",
  messagingSenderId: "830228950709",
  appId: "1:830228950709:web:c56ccf368fa76805f318fc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
