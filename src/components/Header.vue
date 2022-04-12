<template>
  <body class="bg-gradient-to-r from-fuchsia-300 to-purple-300">
    <div class="header">
      <img src="../assets/logo1.png" alt="" class="logo" />
      <div class="header__input" style="height: 50px">
        <i class="material-icons">search</i>
        <input type="text" class="search" />
      </div>
      <button @click="googleSignIn">
        <i class="material-icons" id="Login">login</i>
      </button>
    </div>
  </body>
</template>
<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    googleSignIn: function () {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
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
    },
  },
};
</script>
<style>
@import url("../style/style.css");
</style>
