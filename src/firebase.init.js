// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU3LvzwVCS4Jxt0dmIYaaQwrvSqga3h_I",
  authDomain: "ema-john-simple-2c881.firebaseapp.com",
  projectId: "ema-john-simple-2c881",
  storageBucket: "ema-john-simple-2c881.appspot.com",
  messagingSenderId: "810093558456",
  appId: "1:810093558456:web:c4179d03116ca386b7124d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth