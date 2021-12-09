// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection } from 'firebase/firestore';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyD0Q8v8Ot8s7QerVIRIwg1xNmMwaeppn4U',
//   authDomain: 'checklist-9d862.firebaseapp.com',
//   projectId: 'checklist-9d862',
//   storageBucket: 'checklist-9d862.appspot.com',
//   messagingSenderId: '253559850436',
//   appId: '1:253559850436:web:145eadebaab84332e59091',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// init services
const db = getFirestore();
// collection ref

const colRef = collection(db, 'checklist');

// get collection data
getDocs(colRef).then((snapshot) => {
  console.log(snapshot);
});
