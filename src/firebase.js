import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCr8isPY7CbWtswom67_paZeMeTNGDqLTY",
    authDomain: "new-react-chat-app-615eb.firebaseapp.com",
    projectId: "new-react-chat-app-615eb",
    storageBucket: "new-react-chat-app-615eb.appspot.com",
    messagingSenderId: "974799296411",
    appId: "1:974799296411:web:9cbe3107f32aac7ac4333e",
  })
  .auth();
