import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Initialize Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyBjXokYX8qbJPJC_nSrU2-Y660J3ZKFAFE',
  authDomain: 'weelologin.firebaseapp.com',
  projectId: 'weelologin',
  storageBucket: 'weelologin.appspot.com',
  messagingSenderId: '520474749253',
  appId: '1:520474749253:web:7e5271da840fa408d8762c',
  measurementId: 'G-W8ZMTX38SK',
};

const app = initializeApp(firebaseConfig);

export default app;
