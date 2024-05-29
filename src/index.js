import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCgaY3Z9XJNQwnGj-TXeK9ODrc-rvTZ2bc",
  authDomain: "cart-1ea0b.firebaseapp.com",
  projectId: "cart-1ea0b",
  storageBucket: "cart-1ea0b.appspot.com",
  messagingSenderId: "1015059752705",
  appId: "1:1015059752705:web:f8107420efe26d2c649d00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 