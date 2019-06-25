import firebase from "firebase";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC7YexOVNzvU7kIfF-m9VvY6kv0Nl7ga74",
    authDomain: "testvue-601c1.firebaseapp.com",
    databaseURL: "https://testvue-601c1.firebaseio.com",
    projectId: "testvue-601c1",
    storageBucket: "",
    messagingSenderId: "1067139189076",
    appId: "1:1067139189076:web:ec608cc49da46bdd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.auth().createUserWithEmailAndPassword("asdsd@ww.rr", "openopen").then(
//   u => {
//     console.log("use created");
//   },
//   err => {console.log("error")}
// )

const db = firebase.firestore()
const auth = firebase.auth()
const database = firebase.database()
const currentUser = auth.currentUser


// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const clientsCollection = db.collection('clients')
const notesCollection = db.collection('notes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    clientsCollection,
    notesCollection,
    database
}