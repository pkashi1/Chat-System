//importing React
import React from 'react';
//Importing Icons for Login Page
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

const Login = () => {

    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to <a href="https://github.com/pkashi1/Chat-System" title='GitHub Link'>Chit-Chat!</a></h2>
                <p>A Simple, Secure, and User-Friendly Messenger</p>
                <div className='login-button google'>
                    <GoogleOutlined/>{' '}{' '}Sign In With Google
                </div>
                <br></br>
                <br></br>
                <div className='login-button facebook'>
                    <FacebookOutlined/>{' '}{' '}Sign In With Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;