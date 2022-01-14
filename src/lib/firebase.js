import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import { seedDatabase } from '../seed';

const config = {
   apiKey: "AIzaSyAYAPCydGc7-7wiutGao9ZSsdW-aGVOlzY",
   authDomain: "reactgram-ecb3d.firebaseapp.com",
   projectId: "reactgram-ecb3d",
   storageBucket: "reactgram-ecb3d.appspot.com",
   messagingSenderId: "700582242619",
   appId: "1:700582242619:web:204ded1d5bf6dd488aaf1e"
};


const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


//samo ednas za populating i odma comment
//seedDatabase(firebase);

export { firebase, FieldValue };

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import 'firebase/firestore';
// // import 'firebase/auth';
// //importive gore se od firebase applikacijata na net

// //Here we want to import the seed file
// // import { seedDatabase } from '../seed';

// //Preku config pravime konekcija na nasata app so Firestore DB


// const config = {
//    apiKey: "AIzaSyAYAPCydGc7-7wiutGao9ZSsdW-aGVOlzY",
//    authDomain: "reactgram-ecb3d.firebaseapp.com",
//    projectId: "reactgram-ecb3d",
//    storageBucket: "reactgram-ecb3d.appspot.com",
//    messagingSenderId: "700582242619",
//    appId: "1:700582242619:web:204ded1d5bf6dd488aaf1e"
// };

// const firebase = initializeApp(config);
// console.log(firebase)
// const FieldValue = getFirestore.FieldValue

// // console.log(FieldValue)

// //Here we want to call the seed  file (only ONCE!!!)
// seedDatabase(firebase);


// export { firebase, FieldValue };