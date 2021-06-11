import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOI8KmaoVoMbaSygPrhq_9yEZ0I1a44zY",
    authDomain: "facebook-messenger-4be66.firebaseapp.com",
    projectId: "facebook-messenger-4be66",
    storageBucket: "facebook-messenger-4be66.appspot.com",
    messagingSenderId: "134434635716",
    appId: "1:134434635716:web:bae232cd2792bb9bbf6e91",
    measurementId: "G-E4JN19PJ6S"
});

const db = firebaseApp.firestore();

export default db;