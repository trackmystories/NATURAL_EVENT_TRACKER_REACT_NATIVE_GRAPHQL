require('firebase/firestore');
const firebase = require('firebase/app');
require('firebase/auth');

var config = {
  apiKey: 'AIzaSyBbdZAbjxKbNUEcGMrs-4pKqUkxdLl-QHg',
  authDomain: 'eone-e2a90.firebaseapp.com',
  projectId: 'eone-e2a90',
  storageBucket: 'eone-e2a90.appspot.com',
  messagingSenderId: '463180978724',
  appId: '1:463180978724:web:76c78dd7b6a156d64bd6b1',
  measurementId: 'G-40FNDGC4GY',
};

firebase.initializeApp(config);

module.exports = firebase;
