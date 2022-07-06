// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: "artistwebpa",
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };



const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
// Initialize Firebase
const auth = getAuth(app);

//
// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("email")
    } catch (err) {
        console.error(err.message);
    }
};

const logOut = async () => {
    try {
        await signOut(auth)
        console.log("sign out successful")
    } catch (err) {
        console.log(err.message)
    }
}
// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(userCredential)
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });


// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });

export {
   logInWithEmailAndPassword,
    logOut
    // onAuthStateChanged,
    // createUserWithEmailAndPassword,
}

