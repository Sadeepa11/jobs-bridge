import "./logIn.css";
import logo from './assets/jb.png';
import FormPropsTextFields from "./input";
import React, { useState } from 'react';
import PasswordField from "./passwordFiled";
import AnimeBtn from "./animatedBtn";
import axios from 'axios';

function LogIn() {
    const [isSignInVisible, setIsSignInVisible] = useState(true);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPw] = useState("");
    const [rpassword, setRpw] = useState("");
    const [email1, setEmail1] = useState("");
    const [pw1, setPw1] = useState("");
    const [resume, setResume] = useState(null);  // State for resume file
    const [message, setMessage] = useState("");
    const [message1, setMessage1] = useState('');
    const [loading, setLoading] = useState(false);

    const changeView = () => {
        setIsSignInVisible(!isSignInVisible);
    };

    const handleSignUp = async () => {
        if (!fname || !lname || !email || !password || !rpassword || !resume) {
            setMessage('Please fill in all fields and upload a resume');
            return;
        }
    
        if (password !== rpassword) {
            setMessage('Passwords do not match');
            return;
        }
    
        setLoading(true);
    
        try {
            // Create FormData to handle file upload
            const formData = new FormData();
            formData.append('fname', fname);
            formData.append('lname', lname);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('resume', resume);
    
            const response = await axios.post('http://localhost:3000/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            // Handle successful registration
            const { token } = response.data;
            if (token) {
                localStorage.setItem('authToken', token);
            }
    
            setFname("");
            setLname("");
            setEmail("");
            setPw("");
            setRpw("");
            setResume(null);
            setIsSignInVisible(true);
    
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('User registration failed');
        } finally {
            setLoading(false);
        }
    };

    const handleSignIn = async () => {
        if (!email1 || !pw1) {
            setMessage1('Please fill in all fields');
            return;
        }
    
        setLoading(true);
    
        try {
            const response = await axios.post('http://localhost:3000/signin', {
                email: email1,
                password: pw1
            });
    
            const { token } = response.data;
            if (token) {
                localStorage.setItem('authToken', token);
                window.location.href = '/home';
            }
    
            setEmail1("");
            setPw1("");
    
        } catch (error) {
            console.error('Error during sign-in:', error);
            setMessage1('Sign-in failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-12 d-flex justify-content-center align-items-center vh-100">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <label className="logIn-brandName">JobsBrigde</label>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img src={logo} alt="" className="logoReg" />
                            </div>
                        </div>
                    </div>

                    <div className={`logInbox offset-4 col-4 ${isSignInVisible ? '' : 'd-none'}`} id="logInbox">
                        <div className="row">
                            <div className="col-12 text-center mt-4">
                                <label className="logIn-brandName">Sign In</label>
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <FormPropsTextFields holder="Email" change={(e) => setEmail1(e.target.value)} />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <PasswordField holder="Password" change={(e) => setPw1(e.target.value)} />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                            <AnimeBtn 
                                    text={loading ? 'Loading...' : 'Sign In'} 
                                    width="70%" 
                                    onClick={handleSignIn} 
                                />
                            </div>
                            <div className="col-12 text-center mb-5">
                                <label onClick={changeView} className="authLabel">Don't Have an Account? Sign Up First</label>
                            </div>

                            <div className="col-12 text-center text-danger">
                                {message1 && <p>{message1}</p>}
                            </div>
                        </div>
                    </div>

                    <div className={`regBox offset-4 col-4 ${isSignInVisible ? 'd-none' : ''}`} id="regBox">
                        <div className="row">
                            <div className="col-12 text-center mt-4">
                                <label className="logIn-brandName">Sign Up</label>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <FormPropsTextFields change={(e) => setFname(e.target.value)} holder="First Name" />
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <FormPropsTextFields change={(e) => setLname(e.target.value)} holder="Last Name" />
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <PasswordField change={(e) => setPw(e.target.value)} holder="Password" />
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <PasswordField change={(e) => setRpw(e.target.value)} holder="Re-Password" />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <FormPropsTextFields change={(e) => setEmail(e.target.value)} holder="Email" />
                            </div>
                            <br />
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <input 
                                    type="file" 
                                    accept=".pdf,.doc,.docx" 
                                    onChange={(e) => setResume(e.target.files[0])} 
                                    className="form-control" 
                                />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                                <AnimeBtn 
                                    text={loading ? 'Registering...' : 'Sign Up'} 
                                    width="70%" 
                                    onClick={handleSignUp} 
                                />
                            </div>
                            <div className="col-12 text-center mb-5">
                                <label onClick={changeView} className="authLabel">Already Have an Account? Sign In</label>
                            </div>
                            <div className="col-12 text-center text-danger">
                                {message && <p>{message}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
