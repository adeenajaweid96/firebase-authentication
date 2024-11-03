  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDqkgZyw908JY4Q_p-ofc34nyYiRtVt4xI",
    authDomain: "signup-form-4f5c0.firebaseapp.com",
    projectId: "signup-form-4f5c0",
    storageBucket: "signup-form-4f5c0.firebasestorage.app",
    messagingSenderId: "672076016170",
    appId: "1:672076016170:web:1cb42fdf389f6d21bf3153"
  };

  const app = initializeApp(firebaseConfig);
export {getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged}


