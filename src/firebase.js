import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD22ffuYjuvTPm1u33Y64qbmgmE-fi8m9o",
  authDomain: "authentication2-a2c4b.firebaseapp.com",
  databaseURL: "https://authentication2-a2c4b.firebaseio.com",
  projectId: "authentication2-a2c4b",
  storageBucket: "authentication2-a2c4b.appspot.com",
  messagingSenderId: "365655359740",
  appId: "1:365655359740:web:b34c6c42488fcdb0cdd779"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
