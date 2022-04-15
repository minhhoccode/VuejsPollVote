// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FieldValue } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRrhGHs14Wzfqmaf_ldy4tYxZth8qT-m8",
    authDomain: "conghien-01.firebaseapp.com",
    databaseURL: "https://conghien-01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "conghien-01",
    storageBucket: "conghien-01.appspot.com",
    messagingSenderId: "901922103044",
    appId: "1:901922103044:web:17cc8957da37e3b8f73a51",
    measurementId: "G-G08NDL68WD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:3000/");
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth()
signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

const timestamp = FieldValue.serverTimestamp();

export { timestamp };
export default app.firestore();