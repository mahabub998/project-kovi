import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user,setUser] = useState({});
    var provider = new firebase.auth.GoogleAuthProvider();
    const handelGoogleSingIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
    
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          console.log(user)
          setUser(user)
          // ...
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          // ...
        });
    }
    return (
        <div className="ms-5 mt-5 ">
            <button onClick={handelGoogleSingIn}>google sing in</button>
            <h5>Email : {user.email}</h5>
        </div>
    );
};

export default Login;