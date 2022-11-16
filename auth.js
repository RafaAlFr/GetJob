  // SDKs
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC4ZP5NlN7WvHHK3greEzM9UF04r-gWRQs",
    authDomain: "teste-cd9c6.firebaseapp.com",
    databaseURL: "https://teste-cd9c6-default-rtdb.firebaseio.com",
    projectId: "teste-cd9c6",
    storageBucket: "teste-cd9c6.appspot.com",
    messagingSenderId: "888646451776",
    appId: "1:888646451776:web:9d903ac1a0aa16fbab95a5"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();