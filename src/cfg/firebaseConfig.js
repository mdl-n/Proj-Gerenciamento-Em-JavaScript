import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhpc7SHYj5b-88SYZfTLunOpXIRs4GU54",
  authDomain: "projetogerenciamentojavascript.firebaseapp.com",
  projectId: "projetogerenciamentojavascript",
  storageBucket: "projetogerenciamentojavascript.appspot.com",
  messagingSenderId: "473408567009",
  appId: "1:473408567009:web:578581f71bc047067ba9a0"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);