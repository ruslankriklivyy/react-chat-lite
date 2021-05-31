import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import './index.scss';

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDztsCm4XnZkWyvMi_98dfAe1GdqG2XmkE',
  authDomain: 'chat-react-af273.firebaseapp.com',
  projectId: 'chat-react-af273',
  storageBucket: 'chat-react-af273.appspot.com',
  messagingSenderId: '715268143481',
  appId: '1:715268143481:web:4741c25421c211d94fd7a8',
});

export const Context: any = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        auth,
        firestore,
        firebase,
      }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
