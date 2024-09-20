import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpm8RvoAEhJ9d0fMMpP9UFzCnKXVRUXy0",
  authDomain: "wumicodes-markdown-note.firebaseapp.com",
  projectId: "wumicodes-markdown-note",
  storageBucket: "wumicodes-markdown-note.appspot.com",
  messagingSenderId: "68266593139",
  appId: "1:68266593139:web:3078ee8407266605191306"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const notesCollection = collection (database, "notes")