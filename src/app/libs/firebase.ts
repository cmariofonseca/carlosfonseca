import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfHGBdodtSXrP_tjbDE8dEH8b0kcYFuPc",
  authDomain: "carlosfonseca-af3e8.firebaseapp.com",
  projectId: "carlosfonseca-af3e8",
  storageBucket: "carlosfonseca-af3e8.firebasestorage.app",
  messagingSenderId: "794428830746",
  appId: "1:794428830746:web:cfda2aaa42d91fd2390da3",
  measurementId: "G-76QD1KW7ZX",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
