import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png';
import google from '../../images/google.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" }};


    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          sessionStorage.setItem('token', idToken)
        }).catch(function(error) {
          // Handle error
        });
        
      }

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {        
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {            
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from)
            
            setUserToken();
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div>
            <center>
                <img src={logo} style={{ height:'50px', marginTop:'50px', marginBottom:'60px'}} className="img-fluid"></img>
                <div className="card text-center" style={{width: '22rem',height: '20rem'}}>
                    <div className="mt-5 pt-5">
                        <h5>Login With</h5>
                        <div onClick={handleGoogleSignIn} className="d-flex log">
                            <img src={google} style={{width:'35px', height:'35px'}} className="img-fluid ml-5"></img>
                            <h6 className="text-secondary mt-2">Continue with Google</h6>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default Login;