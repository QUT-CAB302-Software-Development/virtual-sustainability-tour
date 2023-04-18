import React from 'react';
import '../App.css';
import FormInput from '../components/FormInput';
import '../components/FormInput.css'
import { useState } from "react";

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
        name:"confirmemail",
        type:"email",
        placeholder:"Confirm Email",
        errorMessage:"It should be a valid email address!",
        label:"Email",
        required: true,
    },
    {
        id: 4,
        name:"number",
        type:"number",
        placeholder:"Number",
        errorMessage:"It should be a valid number",
        label:"Number",
        required: true,
    },
    {
        id: 5,
        name:"birthday",
        type:"date",
        placeholder:"Birthday",
        label:"Birthday"
    },
    {
        id: 6,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.",
        label:"Password",
        required: true,
    },
    {
        id: 7,
        name:"confirmPassword  ",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage:"Passwords don't match!",
        label:"Confirm Password",
        required: true,
    },
    {
        id: 8,
        name:"Nickname  ",
        type:"nickname",
        placeholder:"Nickname",
        errorMessage:"Nickname must be minimum 3 characters",
        label:"Nickname",
        required: true,
    },
    {
        id: 9,
        name:"Country  ",
        type:"country",
        placeholder:"Country",
        errorMessage:"Not a valid country",
        label:"Country",
        required: true,
    },
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