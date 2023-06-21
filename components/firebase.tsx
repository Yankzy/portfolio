import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, Firestore } from "firebase/firestore";




interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface AuthContextProps {
  currentUser: User | null;
}

export interface ChatContextProps {
  data: any;
  dispatch: any;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyAlhHH3PIZLPTqnfrRLf9bgSunvNIxkW04",
  authDomain: "gptchatty.firebaseapp.com",
  projectId: "gptchatty",
  storageBucket: "gptchatty.appspot.com",
  messagingSenderId: "751533719727",
  appId: "1:751533719727:web:643c82ca247b394549145a",
  measurementId: "G-NVGJM7V5SE"
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
// export const auth: Auth = getAuth();
export const storage  = getStorage(app);
export const db: Firestore = getFirestore(app);

