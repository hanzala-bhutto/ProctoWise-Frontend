import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDY7ULkmxD6BtYTgU64kkn1ogKXEEWjDNU",
  authDomain: "proctowise-c3f95.firebaseapp.com",
  projectId: "proctowise-c3f95",
  storageBucket: "proctowise-c3f95.appspot.com",
  messagingSenderId: "850714987503",
  appId: "1:850714987503:web:77f69ea6c9dae30f8f041a"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};