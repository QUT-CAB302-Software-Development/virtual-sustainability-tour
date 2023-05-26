import React from 'react';
import '../App.css';
import FormInput from '../components/FormInput';
import '../components/FormInput.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSignIn } from 'react-auth-kit';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
// HTTP request to connect with backend API

//

const clientId = "353588049838-0uanbho4sp1tqs675r5brmse59132g4a.apps.googleusercontent.com";
export default function Login() {

    const [values, setValues] = useState({
        username: "",
        password: "",
    });
    const signIn = useSignIn();

    const LOGIN_URL = "http://localhost:3000/user/login";

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    const inputs = [
    {
        id: 1,
        name:"username",
        type:"text",
        placeholder:"Username",
        errorMessage:"You have entered an invalid username.",
        label:"Username",
        required: true,
    },
    {
        id: 2,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"You have entered an invalid password.",
        label:"Password",
        required: true,
    }
    ]

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);

    });



    function handleSubmit(e) {
        e.preventDefault();
        axios.post(LOGIN_URL, {
            username: values.username,
            password: values.password
        })
        .then((response) => {
            // successful login, redirect to tour
            // window.location.href = "/tour";

            signIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { username: values.username}
            });

            // clear form after successful login
            setValues({ username: '', password: ''})
            // navigate to tour
            window.location.href = "/tour";
        })

        .catch((error) => {
            // error in login, print error message in console
            console.log(error);
        })
    };

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    };


    return(
        <motion.div
            className="sign-up"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <form onSubmit={handleSubmit}>
            <h1 className="register">Login</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <div className='buttons'>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        className='google-login-button'
                    />
                    <button className="register-button" type="submit">Submit</button>
                </div>
                <p className="loginredirect"><a href='/user/register'>Don&apos;t have an account?</a></p>

            </form>
        </motion.div>
    );
};