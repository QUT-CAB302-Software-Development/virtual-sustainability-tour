import React from 'react';
import '../App.css';
import FormInput from '../components/FormInput';
import { useState, useRef } from "react";

function SignUp(){

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
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
        name:"email",
        type:"text",
        placeholder:"Email",
        errorMessage:"It should be a valid email address!",
        label:"Email",
        required: true,
    },
    {
        id: 3,
        name:"birthday",
        type:"date",
        placeholder:"Birthday",
        label:"Birthday"
    },
    {
        id: 4,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.",
        label:"Password",
        required: true,
    },
    {
        id: 5,
        name:"confirmPassword  ",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage:"Passwords don't match!",
        label:"Confirm Password",
        required: true,
    }
    ];
    function handleSubmit(e) {
        e.preventDefault();
    };

    const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value });
    };


    return(
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
            <h1 className="register">Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="register-button" type="submit">Submit</button>

            </form>
        </div>
    );

}

export default SignUp;