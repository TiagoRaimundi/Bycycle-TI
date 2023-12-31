import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCtMY1stl0Q940Iwp8XPERUis4EIBYjcLg",
    authDomain: "bycycle-3cea5.firebaseapp.com",
    projectId: "bycycle-3cea5",
    storageBucket: "bycycle-3cea5.appspot.com",
    messagingSenderId: "547870473750",
    appId: "1:547870473750:web:bbd74c2d8c60ee54ab7f37"
  };
  
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app); // Instância correta do Firebase Storage
  
  export { firestore, storage };



export default firestore;
