import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA62MWo1dQ46w7rMOFyIenwEC5YrGhP610",
    authDomain: "players-base.firebaseapp.com",
    databaseURL: "https://players-base.firebaseio.com",
    projectId: "players-base",
    storageBucket: "players-base.appspot.com",
    messagingSenderId: "698136953458",
    appId: "1:698136953458:web:e35ec697308880643d78eb",
    measurementId: "G-5F5538J45G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;