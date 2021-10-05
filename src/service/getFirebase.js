import firebase from "firebase"
// import 'firebase-firestore'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCKxiHKBDbPQ79YdgLNXTzH-bdC1b0tnuU",
    authDomain: "jorgepasteleria-a5276.firebaseapp.com",
    projectId: "jorgepasteleria-a5276",
    storageBucket: "jorgepasteleria-a5276.appspot.com",
    messagingSenderId: "334818671495",
    appId: "1:334818671495:web:0ce602f3d915b5fe6e7122"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}