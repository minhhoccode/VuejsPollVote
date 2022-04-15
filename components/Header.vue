<template>
  <body class="bg-gradient-to-r from-[rgb(66,91,155)] to-[rgb(66,91,147)]">
    <div class="header">
      <img src="../assets/logo1.png" alt="" class="logo" />
      <div class="header__input" style="height: 50px">
        <i class="material-icons">search</i>
        <input type="text" class="search" />
      </div>
      <button @click.prevent="googleSignIn">
        <i class="material-icons" id="Login" v-if="login">login</i>
      </button>
      <button @click.prevent="googleSignIn">
        <i class="material-icons" id="Login" v-if="!login">logout</i>
      </button>
    </div>
  </body>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  // connectAuthEmulator,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// import db from "../firebase/firebaseinit";

const firebaseConfig = {
  apiKey: "AIzaSyDRrhGHs14Wzfqmaf_ldy4tYxZth8qT-m8",
  authDomain: "conghien-01.firebaseapp.com",
  databaseURL:
    "https://conghien-01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "conghien-01",
  storageBucket: "conghien-01.appspot.com",
  messagingSenderId: "901922103044",
  appId: "1:901922103044:web:17cc8957da37e3b8f73a51",
  measurementId: "G-G08NDL68WD",
};
import {getDatabase, ref, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
export default {
  data() {
    return {
      displayName: "",
      email: "",
      photoURL: "",
      login: true,
    };
  },
  methods: {
    googleSignIn: function () {
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      // connectAuthEmulator(auth, "http://localhost:3000/");

      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        this.displayName = user.displayName;
        this.email = user.email;
        this.photoURL = user.photoURL;
        this.login = !this.login;
      }
      // const dataBase = db.collection("User").doc(user.uid);
    },
  },
};
</script>
<style>
@import url("../style/style.css");
</style>
