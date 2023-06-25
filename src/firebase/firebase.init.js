// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxoGB7Dd2rsG1NaCie7CU9ln_W_OgWF4M",
  authDomain: "portfolio-f520e.firebaseapp.com",
  projectId: "portfolio-f520e",
  storageBucket: "portfolio-f520e.appspot.com",
  messagingSenderId: "1073806180243",
  appId: "1:1073806180243:web:fb62c5179802cfab423266",
  measurementId: "G-GFMPTYRQZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;