

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAu0_VQWaawPIMNNbozehcTg4gix2ferdM",
    authDomain: "linkedin-clone-6f342.firebaseapp.com",
    projectId: "linkedin-clone-6f342",
    storageBucket: "linkedin-clone-6f342.appspot.com",
    messagingSenderId: "505391650017",
    appId: "1:505391650017:web:5738c5316e2d161abdd3a0",
    measurementId: "G-MHEZW72Z93"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  const auth=firebase.auth();

  export  {db,auth};
  