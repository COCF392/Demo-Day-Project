const firebaseConfig = {
  apiKey: "AIzaSyAHBsu-Q2xdPhqEety31VZAcNbtzR-4A4s",
  authDomain: "forum-477c8.firebaseapp.com",
  projectId: "forum-477c8",
  storageBucket: "forum-477c8.appspot.com",
  messagingSenderId: "1011618755292",
  appId: "1:1011618755292:web:d59e37e12b53097ca53a19",
  measurementId: "G-KY14JRM7HK"
};
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore(app)