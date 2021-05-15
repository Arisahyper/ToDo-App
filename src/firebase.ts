// import * as firebase from "firebase/app"; これだとエラー
import firebase from "firebase/app";
import "firebase/app";
// データベース
import "firebase/firestore";
// 認証
import "firebase/auth";


const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    apiId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
