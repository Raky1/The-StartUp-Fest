import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBaZJSwtBqQdu62TSLhyWlN_3aFlJCtqYM",
    authDomain: "the-startup-fest.firebaseapp.com",
    databaseURL: "https://the-startup-fest.firebaseio.com",
    projectId: "the-startup-fest",
    storageBucket: "the-startup-fest.appspot.com",
    messagingSenderId: "824522163846"
}

export const firebaseImpl = firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export const firebaseDatabase = firebase.firestore();
