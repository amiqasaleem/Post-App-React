import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Nqph5pE7Mhv8dDB9NlygSGfnzvsJmkI",
  authDomain: "post-app-react-1de47.firebaseapp.com",
  projectId: "post-app-react-1de47",
  storageBucket: "post-app-react-1de47.firebasestorage.app",
  messagingSenderId: "680665330849",
  appId: "1:680665330849:web:a81bd8998e11561ed76ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);

export {
    auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged
}
