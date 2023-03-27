import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBeZ2Q7eXyu90rZ34Y8Gu_9JYTMo8X0RRk",
  authDomain: "app-faec0.firebaseapp.com",
  projectId: "app-faec0",
  storageBucket: "app-faec0.appspot.com",
  messagingSenderId: "251453280324",
  appId: "1:251453280324:web:3d35885d994a7abcd6ec11",
  measurementId: "G-GZCN66XCKB"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

