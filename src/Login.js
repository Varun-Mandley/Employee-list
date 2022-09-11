import React, {useState } from 'react'
import './Login.css'
import img1 from "./img/4.jpg"
import { FcGoogle } from "react-icons/fc";
import { BiUser } from "react-icons/bi";
import firebase from './Firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Weather from './Weather';
import { Link } from 'react-router-dom';


const Login = () => {
    const [dt, setdt] = useState({ displayname: '', email: '', photo: '', islogin: false });
    const handler = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                console.log(token);
                const user = result.user;
                // console.log(user);
                // console.log(user.displayName);
                // console.log(user.email);
                // console.log(user.photoURL);
                setdt({ displayname: user.displayName, email: user.email, photo: user.photoURL, islogin: true });

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode, errorMessage, email, credential);
            });

    };
    const SignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setdt({ displayname: "", email: "", url: "", isLogged: false });
        }).catch((error) => {
            // An error happened.
        });

    };
    
    return (
        <>
            {
                dt.islogin === true ?
                    <div>
                        <div className='logging-page'>
                            <div className='header d-flex justify-content-between'>
                                <div > 
                                    <img style={{ margin: '14px 20px', borderRadius: '50%' }} src={dt.photo} alt={dt.name} />
                                </div>
                                <div style={{ marginTop: '10px' }} >
                                    <span style={{ fontSize: '36px', fontWeight: '700' }}>Hello,</span> <span style={{ fontSize: '32px', fontWeight: '400', color: '#00bea4' }}>{dt.displayname}</span> <br /><span style={{ fontSize: '22px', textDecoration: 'underline' }}>{dt.email}</span>
                                </div>
                                <div >
                                    <Link to='/feedback/form' className='feedback singout-btn'>Feedback</Link>
                                    <button onClick={SignOut} className='singout-btn'>SignOut</button>
                                </div>
                            </div>
                            <Weather data={dt.email}></Weather>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 style={{ textAlign: 'center', padding: '10px', fontSize: '62px', fontWeight: 'bolder', backgroundColor: '#f0f0f0' }}>Weather Forecast</h2>
                        <div className="d-flex log-img-form">
                            <div className='col-6'>
                                <img src={img1} className="img-fluid" style={{ height: "530px", display: 'block', margin: "auto" }} alt="" referrerPolicy='no-referrer' />
                            </div>
                            <div className='offset-1 col-5 margin'>
                                <p className="tittle-img">Welcome <span className='tittle-user-img'><BiUser /></span></p>
                                <h2 className="tittle">Sign <span>in</span></h2>
                                <button onClick={handler} className='tittle-login'><span><FcGoogle /></span> Login with google account</button>
                            </div>
                        </div>
                        <hr />
                        <p className='text-center'>&copy; All right are reserved by VARUN</p>
                    </div>

            } 
        </>
    )
}

export default Login;
