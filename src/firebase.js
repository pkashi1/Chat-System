import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBAnPelYqTf2K4WlNjfU7_92u9LS-KFJjQ",
    authDomain: "chit-chat-8d3a1.firebaseapp.com",
    projectId: "chit-chat-8d3a1",
    storageBucket: "chit-chat-8d3a1.appspot.com",
    messagingSenderId: "530247128399",
    appId: "1:530247128399:web:17bfb27e879f37ad1b213a",
    measurementId: "G-0X7Q8F4WFX"
  }).auth();