import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSQo8w-HtJlVJV520eX-a6atj-Lf3VVC0",
    authDomain: "crwn-ecommerce-2cfa5.firebaseapp.com",
    projectId: "crwn-ecommerce-2cfa5",
    storageBucket: "crwn-ecommerce-2cfa5.appspot.com",
    messagingSenderId: "475652755604",
    appId: "1:475652755604:web:8099c579c512f530b4a481"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
