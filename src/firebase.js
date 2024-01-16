import { initializeApp } from
 
'firebase/app';
import { getAuth, GoogleAuthProvider } from
 
'firebase/auth';
import { getFirestore } from
 
'firebase/firestore';
import { getStorage } from
 
'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDyFvXW_7xUSVwM6iFsIag8-R06oTj8GGY",
  authDomain: "disney-plus-clone-48d0b.firebaseapp.com",
  projectId: "disney-plus-clone-48d0b",
  storageBucket: "disney-plus-clone-48d0b.appspot.com",
  messagingSenderId: "631502297521",
  appId: "1:631502297521:web:622612fa14307a83734590",
  measurementId: "G-8KCLVYVR4Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export
 
default db;