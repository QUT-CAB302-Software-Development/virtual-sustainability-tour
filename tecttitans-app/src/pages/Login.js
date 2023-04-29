import React from 'react';
import '../App.css';
import FormInput from '../components/FormInput';
import '../components/FormInput.css'
import { useState } from "react";



export default function Login() {

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const inputs = [
    {
        id: 1,
        name:"username",
        type:"text",
        placeholder:"Username",
        errorMessage:"Username should be 3-16 characters and should not include special characters!",
        label:"Username",
        required: true,
    },
    {
        id: 2,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.",
        label:"Password",
        required: true,
    }
    ]

    function handleSubmit(e) {
        e.preventDefault();
    };

    const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value });
    };


    return(
        <div className="sign-up">
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
        </div>
    );
};