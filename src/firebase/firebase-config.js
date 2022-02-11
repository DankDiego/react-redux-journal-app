import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1u7QB3dAFfJnTUtrDhJN7dx0dRP5h52o",
    authDomain: "react-app-cursos-5b7d4.firebaseapp.com",
    databaseURL: "https://react-app-cursos.firebaseio.com",
    projectId: "react-app-cursos-5b7d4",
    storageBucket: "react-app-cursos-5b7d4.appspot.com",
    messagingSenderId: "343833342144",
    appId: "1:343833342144:web:dba856d71ab9a647ec7d25"
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD5-4gUUrMLCzTWDEJ3QpkmfIboN5PDCq4",
//     authDomain: "push-one-signal-17ede.firebaseapp.com",
//     databaseURL: "https://push-one-signal-17ede.firebaseio.com",
//     projectId: "push-one-signal-17ede",
//     storageBucket: "push-one-signal-17ede.appspot.com",
//     messagingSenderId: "803724161810",
//     appId: "1:803724161810:web:02f32ebc98a71e376339cb"
//   };


// if( process.env.NODE_ENV === 'test' ) {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
// dev/prod
// firebase.initializeApp(firebaseConfig);
// }
    
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}