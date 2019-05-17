import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD76g3n5X4Ll2GVaEb5Ds2vByHymWO8e88",
  authDomain: "authentication-d0870.firebaseapp.com",
  databaseURL: "https://authentication-d0870.firebaseio.com",
  projectId: "authentication-d0870",
  storageBucket: "authentication-d0870.appspot.com",
  messagingSenderId: "1071599035383",
  appId: "1:1071599035383:web:c31746fac99ec883"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
