import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXYAtDtnPmePSWr9pMdxnRkmT7a6zr_9Y",
  authDomain: "wahyucare-klinik.firebaseapp.com",
  projectId: "wahyucare-klinik",
  storageBucket: "wahyucare-klinik.firebasestorage.app",
  messagingSenderId: "614744169746",
  appId: "1:614744169746:web:dee90d0ea2cdfc957ba7cb"
};

const app = initializeApp(firebaseConfig);

export default app;