// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyB3F9RXK90e_QdyzrXd3fekH1y3kSWGnwE",
  authDomain: "reactfire-bde93.firebaseapp.com",
  projectId: "reactfire-bde93",
  storageBucket: "reactfire-bde93.firebasestorage.app",
  messagingSenderId: "1065652845615",
  appId: "1:1065652845615:web:eb615eb4931e4a07bd9ada",
  measurementId: "G-HGS1WS5JMP"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 인증 초기화
const auth = getAuth(app);

export { auth };
