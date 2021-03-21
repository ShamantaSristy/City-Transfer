import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../Home/Home';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    var googleProvider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                // var user = result.user;
                console.log(result);
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log('loggedin user mail',loggedInUser.email);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // console.log(errorMessage, errorCode, email, credential);
            });
    }

    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }


    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.userCreated = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    //   console.log('loggedin user mail',loggedInUser.email);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.userCreated = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.userCreated = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    //   console.log('sign in user info', res.user);
                    console.log('loggedin user mail', loggedInUser.email);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.userCreated = false;
                    setUser(newUserInfo);
                });
        }
        event.preventDefault();
    }


    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        })
            .then(function () {
                console.log('username updated successfully')
            }).catch(function (error) {
                console.log(error);
            });
    }

    const handleSignOut = () => {
        firebase.auth()
            .signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    password: '',
                    email: '',
                    error: '',
                    userCreated: false
                }
                setUser(signedOutUser);
            })
            .catch(err => {

            })
    }

    return (
        <div style={{backgroundColor: '#e4d3cf',
                      height: '100vh'}}>
            {
                user.isSignedIn && <div>
                    <img src={user.photo} alt={user.name} />
                    <p>Welcome, {user.name}</p>
                    <p>Your email: {user.email}</p>
                </div>
            }

            <div>
                <h1>Please Login First</h1>

                <form action="" onSubmit={handleSubmit}>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                    <label htmlFor="newUser">New User Sign Up</label>
                    <br />
                    {
                        newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name" />
                    }
                    <br />
                    <input type="text" onBlur={handleBlur} name="email" placeholder="Enter your email address" />
                    <br />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Your password" />
                    <br />
                    <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                </form>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.userCreated && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>
                }
            </div>


            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <br/>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Login;