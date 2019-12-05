import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCFQMETDLLiGS8MM7BNJLnikHZaETKkTI4",
    authDomain: "flutter-test-37cbe.firebaseapp.com",
    databaseURL: "https://flutter-test-37cbe.firebaseio.com",
    projectId: "flutter-test-37cbe",
    storageBucket: "flutter-test-37cbe.appspot.com",
    messagingSenderId: "427510800098",
    appId: "1:427510800098:web:46f86aefda0f88d47f08bb",
    measurementId: "G-WMZQN2M541"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
