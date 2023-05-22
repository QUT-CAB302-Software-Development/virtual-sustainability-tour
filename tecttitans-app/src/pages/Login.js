import React from 'react';
import '../App.css';
import FormInput from '../components/FormInput';
import '../components/FormInput.css'
import { useState } from "react";
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSignIn } from 'react-auth-kit';

// HTTP request to connect with backend API

//
export default function Login() {

    const [values, setValues] = useState({
        username: "",
        password: "",
    });
    const signIn = useSignIn();

    const LOGIN_URL = "http://localhost:8080/user/login";

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
                <button className="register-button" type="submit">Submit</button>
                <p className="loginredirect"><a href='/sign-up'>Don&apos;t have an account?</a></p>

            </form>
        </motion.div>
    );
};